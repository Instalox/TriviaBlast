const Team = require("./team");

class Game {
  constructor(roomID) {
    this.roomID = roomID;
    this.teams = {};
    this.questions = [];
    this.questionIndex = 0;
  }

  addPlayerToTeam(playerID, teamID) {
    if (!this.teams[teamID]) {
      this.teams[teamID] = { players: [], score: 0 };
    }
    if (!this.teams[teamID].players.includes(playerID)) {
      this.teams[teamID].players.push(playerID);
    }
  }

  startGame() {
    this.questionIndex = 0;
    this.questions = [];
  }

  nextQuestion() {
    this.questionIndex++;
    if (this.questionIndex >= this.questions.length) {
      this.questionIndex = 0;
    }
  }

  submitAnswer(playerID, answer) {}

  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }
}
module.exports = Game;
