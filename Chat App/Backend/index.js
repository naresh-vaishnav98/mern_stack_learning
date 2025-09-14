const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
require("dotenv").config();
const chatRoutes = require('./routes/chat.routes');


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', // allow all origins (for dev)
    methods: ['GET', 'POST']
  }
});
// mongodb://localhost:27017/

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('ChatDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/auth', chatRoutes);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('sendMessage', (data) => {
    io.emit('receiveMessage', data); // broadcast to all users
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(process.env.PORT, () => console.log('Server running on port 5002'));