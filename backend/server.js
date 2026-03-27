const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const gameRoutes = require("./routes/gameRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/games", gameRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));