const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http); // Socket.IO
const port = 3000;
const Game = require("./gameLogic/game");
let rooms = {}; // This will hold the state of all game rooms
let games = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("join room", (roomID, teamID) => {
    console.log("user joined room: " + roomID);
    socket.join(roomID);
    if (!games[roomID]) {
      rooms[roomID] = new Game(roomID);
    }
    games[roomID].addPlayerToTeam(socket.id, teamID);
    io.to(roomID).emit("update game", games[roomID]);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(port, () => {
  console.log("listening on *:3001");
});
