const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 5555;
const path = require("path");

app.use(express.static("public"));
let users = [];

http.listen(port, function () {
  console.log(`Webserver listening on *:${port}`);
});

io.on("connection", function (socket) {
  users.push(socket);
  io.emit("user number", users.length);

  socket.on("chat message", function (msg) {
    console.log("Got a message");
    io.emit("chat message", msg);
  });

  socket.on("disconnect", function () {
    users = users.filter((u) => u !== socket);
    io.emit("user number", users.length);
  });
});
