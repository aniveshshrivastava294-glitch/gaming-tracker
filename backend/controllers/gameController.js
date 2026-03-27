const Game = require("../models/Game");

// GET all games
exports.getGames = async (req, res) => {
    try {
        const games = await Game.find().sort({ createdAt: -1 });
        res.json(games);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ADD game
exports.addGame = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.status(201).json(game);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE game
exports.deleteGame = async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: "Game deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};