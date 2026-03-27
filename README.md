# 🎮 GammingHubba (formerly Nexus Tracker)

GammingHubba is a premium, full-stack web application designed to help you track your entire gaming library with style. It features an immersive glass-morphic UI, dynamic glow effects, and a seamlessly integrated backend database.

## ✨ Features

- **Beautiful Glassmorphism Design**: Experience a modern, vibrant dark-mode desktop and mobile UI.
- **Library Tracking**: Add games including Title, Platform, Genre, Status (Playing, Completed, Wishlist), Rating, and Custom Image URLs.
- **Hours Played Tracking**: Log the complete duration of your adventures!
- **Dynamic Filtering**: Instantly sort your grid by active status using the built-in aesthetic tabs.
- **Zero-Config Database**: If you haven't set up a MongoDB Atlas URI, the app comes equipped with an auto-healing `mongodb-memory-server` that instantly boots up a local memory database behind the scenes so the app works *instantly* upon running.

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, and beautiful custom CSS.
- **Backend Architecture**: Node.js & Express (MVC structured).
- **Database**: MongoDB (Mongoose Schema mapping).

## 🚀 How to Run Locally

You only need to boot the backend server; the frontend is completely static!

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Start the server (runs on port `5000`):
   ```bash
   npm start
   ```
4. Double-click `frontend/login.html` (or open it via a Live Server extension) in your browser to enter the application!

## 🔐 Environment Variables (Optional)
If you wish to save your games permanently instead of using the instant local memory server, create a `.env` file in the `/backend` folder:
```env
MONGO_URI=mongodb+srv://<your_db_username>:<your_db_password>@cluster.mongodb.net/GammingHubba?retryWrites=true&w=majority
PORT=5000
```
