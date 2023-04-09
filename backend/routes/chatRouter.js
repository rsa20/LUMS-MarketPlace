// const express = require('express');
// const router = express.Router();
// const Message = require('../models/msg');

// // Get all messages
// router.get('/allChats', (req, res) => {
//   console.log("working")

//   Message.find((err, messages) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(messages);
//     }
//   });
// });

// router.post('/tester', (req, res) => {
//   console.log("tester")

// });

// // Create a new message
// router.post('/newChat', (req, res) => {
//   const newMessage = new Message(req.body);
//   newMessage.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(newMessage);
//     }
//   });
// });

// // Get a single message by ID
// router.get('/chat/:id', (req, res) => {
//   Message.findById(req.params.id, (err, message) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     } else if (!message) {
//       res.status(404).send('Message not found');
//     } else {
//       res.json(message);
//     }
//   });
// });

// // Update an existing message
// router.put('/chat/:id', (req, res) => {
//   Message.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, message) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     } else if (!message) {
//       res.status(404).send('Message not found');
//     } else {
//       res.json(message);
//     }
//   });
// });

// // Delete a message by ID
// router.delete('/deleteChat/:id', (req, res) => {
//   Message.findByIdAndDelete(req.params.id, (err, message) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     } else if (!message) {
//       res.status(404).send('Message not found');
//     } else {
//       res.sendStatus(204);
//     }
//   });
// });

// module.exports = router;
