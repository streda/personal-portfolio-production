"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const body_parser_1 = __importDefault(require("body-parser"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const winston_1 = __importDefault(require("winston"));
// Load environment variables
//dotenv.config();
dotenv_1.default.config({ path: '.env.production' });
// Set up Winston logger
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'combined.log' }),
        new winston_1.default.transports.Console()
    ]
});
// Log that the server is starting
logger.info('Initializing server...');
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.CLIENT_ORIGIN || '*',
        methods: ['GET', 'POST']
    }
});
// Middleware for JSON parsing
app.use(body_parser_1.default.json());
// CORS setup
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_ORIGIN || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// API Route: Define before serving the frontend
app.post('/api/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    // Validate data
    if (!name || !email || !message) {
        logger.warn('Invalid form submission attempt');
        return res.status(400).send('All fields are required.');
    }
    try {
        // Configure Nodemailer
        const transporter = nodemailer_1.default.createTransport({
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
        yield transporter.sendMail(mailOptions);
        logger.info(`Email sent successfully from ${email}`);
        res.status(200).send('Message sent successfully!');
    }
    catch (error) {
        logger.error('Email sending failed:', { error });
        res.status(500).send('Failed to send message.');
    }
}));
// Handle WebSocket connections
io.on('connection', (socket) => {
    logger.info(`A user connected: ${socket.id}`);
    socket.on('send_message', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, message } = data;
        if (!name || !email || !message) {
            logger.warn('Invalid form submission attempt');
            socket.emit('form_error', 'All fields are required.');
            return;
        }
        try {
            const transporter = nodemailer_1.default.createTransport({
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
            yield transporter.sendMail(mailOptions);
            logger.info(`Email sent successfully from ${email}`);
            socket.emit('form_success', 'Message sent successfully!');
        }
        catch (error) {
            logger.error('Email sending failed:', { error });
            socket.emit('form_error', 'Failed to send message.');
        }
    }));
    socket.on('disconnect', () => {
        logger.info(`A user disconnected: ${socket.id}`);
    });
});
// Serve the React frontend (using the built files)
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
// Catch-all route: serve the React app for any routes not handled above
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
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
exports.default = app;
