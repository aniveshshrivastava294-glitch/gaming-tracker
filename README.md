# 🎮 GammingHubba 

**GammingHubba** is a premium, full-stack web application designed to help you track your entire gaming library with style. Built with an immersive glass-morphic UI, dynamic glow effects, and a seamlessly integrated Node.js & MongoDB backend, this app provides the ultimate aesthetic experience for gamers.

---

## ✨ Features

- **Beautiful Glassmorphism Design**: Experience a modern, vibrant dark-mode desktop and mobile UI with frosted-glass overlays and CSS neon accents.
- **Library Tracking**: Add games including Title, Platform, Genre, Status (Playing, Completed, Wishlist), Rating, and Custom Image URLs.
- **Hours Played Tracking**: Log the complete duration of your adventures with integrated visual metrics.
- **Dynamic Filtering**: Instantly sort your grid by active status using the built-in fast-action tabs.
- **Zero-Config Database Fallback**: Out of the box, if you haven't set up a MongoDB Atlas URI, the app comes equipped with an auto-healing `mongodb-memory-server` that instantly boots up a local memory database behind the scenes. This ensures the backend works *instantly* upon cloning.

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, and extensive custom CSS.
- **Backend Architecture**: Node.js & Express (Industry standard MVC structure: Models, Views, Controllers, Routes).
- **Database**: MongoDB (Mongoose Schema mapping).

---

## 🚀 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aniveshshrivastava294-glitch/gaming-tracker.git
   cd gaming-tracker
   ```

2. **Boot the Backend**:
   Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
   npm install
   npm start
   ```
   *The server will start on port `5000`.*

3. **Launch the Frontend**:
   Simply run a local server in the `frontend` folder (using tools like `npx serve` or VSCode's Live Server extension), or just drag and drop `frontend/login.html` into your web browser to enter the application!

---

## 🔐 Environment Variables (Optional)

If you wish to permanently save your games across server restarts (instead of using the instant local memory server), create a `.env` file inside the `backend/` folder with your Mongo URI:

```env
MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster.mongodb.net/GammingHubba?retryWrites=true&w=majority
PORT=5000
```
