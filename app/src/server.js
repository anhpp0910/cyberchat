const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const publicPathDirectory = path.join(__dirname, "../public");
app.use(express.static(publicPathDirectory));

const server = http.createServer(app);
const io = socketio(server);

// lắng nghe sự kiện kết nối từ client
io.on("connection", (socket) => {
  console.log("new client connection");
  socket.on("send message c to s", (message) => {
    io.emit("send message s to c", message);
  });

  // ngắt kết nối
  socket.on("disconnect", () => {
    console.log("client left server");
  });
});

const port = 8080;
server.listen(port, () => {
  console.log(`App runs on http://localhost:${port}`);
});
