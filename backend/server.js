const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 1000;
const connectDataBase = require('./config/db');
const http = require('http');

connectDataBase();

// for chat
const configureWebsocket = require('./controllers/chat');
const Message = require('./models/msg');


const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/posts', require('./routes/postsRoutes'));
app.use('/api/search', require('./routes/searchRoutes'));
app.use('/api/wishlist', require('./routes/wishlistRoutes'));
app.use('/api/reviews', require('./routes/reviewsRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/messages', require('./routes/chatRouter'));

configureWebsocket(server);


server.listen(port, () => console.log(`Server started on port ${port}`));
