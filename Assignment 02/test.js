// Code from the official socket.io documentation
const express = require("express");
const Client = require("socket.io-client");
const port = 5555;

describe("Connection Test", () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const app = express();
    const http = require("http").Server(app);
    io = require("socket.io")(http);
    http.listen(port, () => {
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("should work", (done) => {
    clientSocket.on("hello", (arg) => {
      expect(arg).toBe("world");
      done();
    });
    serverSocket.emit("hello", "world");
  });

  test("should work (with ack)", (done) => {
    serverSocket.on("hi", (cb) => {
      cb("hola");
    });
    clientSocket.emit("hi", (arg) => {
      expect(arg).toBe("hola");
      done();
    });
  });
});
