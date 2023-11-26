const Player = require("./player");

class Team {
  constructor(teamId) {
    this.teamId = teamId;
    this.players = [];
    this.score = 0;
  }

  addPlayer(playerId) {
    const player = new Player(playerId);
    this.players.push(player);
  }

  // Additional methods related to team functionality
  // For example, updating the score, handling answers, etc.
  updateScore(points) {
    this.score += points;
  }

  handleAnswer(playerId, answer) {
    // Logic for handling the answer goes here
  }
}

module.exports = Team;
