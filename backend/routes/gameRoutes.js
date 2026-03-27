const express = require("express");
const router = express.Router();

const {
    getGames,
    addGame,
    deleteGame
} = require("../controllers/gameController");

router.get("/", getGames);
router.post("/", addGame);
router.delete("/:id", deleteGame);

module.exports = router;