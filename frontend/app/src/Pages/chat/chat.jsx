import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch all messages from the server
    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data));

    // Listen for new messages from the server
    socket.on('message', (data) => {
      setMessages((messages) => [...messages, data]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    // Send the new message to the server
    socket.emit('message', { text: newMessage });

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div>
      <h1>Messages</h1>

      <ul>
        {messages.map((message) => (
          <li key={message._id}>{message.text}</li>
        ))}
      </ul>

      <form onSubmit={handleMessageSubmit}>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;