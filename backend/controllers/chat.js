const socketIO = require('socket.io');
const Message = require('../models/msg');

function configureWebsocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('New user connected');

    // Handle new messages
    socket.on('message', (data) => {
      console.log('New message:', data);
      const message = new Message(data);
      message.save((err) => {
        if (err) {
          console.error(err);
        } else {
          io.emit('message', data);
        }
      });
    });

    // Handle disconnected users
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

module.exports = configureWebsocket;