# Personal Portfolio

**Personal Portfolio** is a modern, responsive web application built with **TypeScript**, **React**, and **Tailwind CSS**.  
It showcases my work, projects, and professional journey in an interactive way.

## Features

- **Fully responsive** – Works on all devices 
- **Built with TypeScript** – Ensures type safety and better maintainability
- **Tailwind CSS** – Lightweight and fast styling 
- **Dark/Light Mode** – User-friendly UI 
- **Contact Form** – Sends messages via the backend 
- **Deployed with Nginx & PM2** – Efficiently served on a production server 

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Deployment:** Digital Ocean (Ubuntu), Nginx, PM2, Certbot (SSL)  

---

## Getting Started

### **Prerequisites**
Ensure you have the following installed before starting:

- **Node.js** (v18 or later) – [Download Here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control)

---

### **Installation & Setup**
Follow these steps to clone and set up the project on your local machine.

#### **1️⃣ Clone the repository**
```sh
git clone https://github.com/streda/personal-portfolio-production.git
cd personal-portfolio-production
```


#### **2️⃣ Install dependencies** 
```
npm install
```

#### **3️⃣ Create an .env file**
Before running, create a .env file in the root directory and add:
```
REACT_APP_API_URL=http://localhost:5000/api
```

#### **4️⃣ Start the development server**
```
npm run dev
```
Open http://localhost:3000 in your browser.


#### **Backend Setup**
Run the backend locally:

#### **1️⃣ Install dependencies**
```
npm install
```

#### **2️⃣ Start the backend server**
```
npm run start
```

Backend will run on http://localhost:5000/.

#### **Production Deployment**
The project is deployed using Nginx and managed via PM2.
Start Backend with PM2

```
pm2 start dist/server.js --name "portfolio-backend"
pm2 save
pm2 restart all
```

Restart Nginx

```
sudo systemctl restart nginx
```

### **Contributing**

If you’d like to contribute:

	1.	Fork the repo

	2.	Create a feature branch (git checkout -b new-feature)

	3.	Commit changes (git commit -m "Added new feature")

	4.	Push to the branch (git push origin new-feature)
    
	5.	Open a Pull Request 

### **License**

This project is licensed under the MIT License.

### **📧 Contact**

For any questions or collaborations, feel free to reach out:

📩 Email: samuelreda2018@gmail.com

🔗 GitHub: streda
