// yêu cầu server kết nối với client
const socket = io();

document.getElementById("form-messages").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("input-message").value;
  socket.emit("send message c to s", message);
});

socket.on("send message s to c", (message) => {
  console.log(message);
});
