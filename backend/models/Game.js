const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    platform: String,
    genre: String,
    status: String,
    rating: { type: Number, min: 1, max: 10 },
    hoursPlayed: { type: Number, default: 0 },
    progress: { type: Number, default: 0, min: 0, max: 100 },
    completionGoal: String,
    startDate: String,
    endDate: String,
    image: String,
    isNextUp: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Game", GameSchema);