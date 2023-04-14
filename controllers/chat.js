// // const socketIO = require('socket.io');
// const Message = require('../models/msg');

// function configureWebsocket(server) {
//   const io = require('socket.io')(server);

//   io.on('connection', (socket) => {
//     console.log('A user connected');
//     socket.on('message', (data) => {
//       const newMessage = new Message(data);
//       newMessage.save((err) => {
//         if (err) {
//           console.error(err);
//           socket.emit('error', 'Internal server error');
//         } else {
//           socket.emit('message', newMessage);
//         }
//       });
//     });
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     }); 
//   });
// }

// module.exports = configureWebsocket;