const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    platform: String,
    genre: String,
    status: String,
    rating: Number,
    hoursPlayed: { type: Number, default: 0 },
    image: String
}, { timestamps: true });

module.exports = mongoose.model("Game", GameSchema);