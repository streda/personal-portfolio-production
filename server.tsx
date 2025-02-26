import path from 'path';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import winston from 'winston';

// Load environment variables
//dotenv.config();
dotenv.config({ path: '.env.production' });

// Set up Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console()
  ]
});

// Log that the server is starting
logger.info('Initializing server...');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || '*', 
    methods: ['GET', 'POST']
  }
});

// Middleware for JSON parsing
app.use(bodyParser.json());

// CORS setup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_ORIGIN || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API Route: Define before serving the frontend
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate data
  if (!name || !email || !message) {
    logger.warn('Invalid form submission attempt');
    return res.status(400).send('All fields are required.');
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
	logger: true,
	debug: true
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, 
      subject: `New Contact Form Submission from ${name}`,
      text: `Message: ${message}\n\nFrom: ${name} (${email})`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    logger.info(`Email sent successfully from ${email}`);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    logger.error('Email sending failed:', { error });
    res.status(500).send('Failed to send message.');
  }
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  logger.info(`A user connected: ${socket.id}`);

  socket.on('send_message', async (data) => {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      logger.warn('Invalid form submission attempt');
      socket.emit('form_error', 'All fields are required.');
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `New Contact Form Submission from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name} (${email})`
      };

      await transporter.sendMail(mailOptions);
      logger.info(`Email sent successfully from ${email}`);
      socket.emit('form_success', 'Message sent successfully!');
    } catch (error) {
      logger.error('Email sending failed:', { error });
      socket.emit('form_error', 'Failed to send message.');
    }
  });

  socket.on('disconnect', () => {
    logger.info(`A user disconnected: ${socket.id}`);
  });
});

// Serve the React frontend (using the built files)
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route: serve the React app for any routes not handled above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});


// Start the server
//const PORT = process.env.PORT || 5000;
//app.listen(PORT, '0.0.0.0', () => {
  //  console.log(`Server is running on port ${PORT}`);
//});

export default app;
