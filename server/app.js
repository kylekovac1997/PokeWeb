const express = require('express');
const path = require('path')
const cors = require('cors');
const {verifyToken} = require("./controllers/checkToken")
const app = express();
const jwt = require("jsonwebtoken");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
  }
});
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 4000;
const AllPokemonApi = require('./Routes/PokeBoxApi');
const loginApi = require("./Routes/LoginApi");
const logoutApi = require("./Routes/logoutApi");
const signupApi = require("./Routes/signupApi");
const allUsers = require("./Routes/Users");
const addUser = require("./Routes/Users");
const friend = require("./Routes/Users");
const storeMessage = require("./Routes/Users")
const retriveMessage = require("./Routes/Users")
const { connectToMongoDb } = require("./database/mongoDB.js");
const rateLimit = require('express-rate-limit');
connectToMongoDb();
require("dotenv").config()
app.use(cors());
app.use(
  express.json({
    limit: "20mb", // Adjust the limit as needed
  })
);


app.use(
  express.urlencoded({
    limit: "20mb", // Adjust the limit as needed
    extended: true,
  })
);

app.use(
  fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 }, //File size limit: 10 MB
  })
);

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes (time window for rate limiting)
  max: 100, // requests per IP per time window
  message: 'Too many requests, please try again later.',
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public'));
// });



app.use("/", express.static("server"));
app.use('/api', AllPokemonApi); // Api to grab pokemon data {gifs, images, names, hp, moves, etc } 
app.use('/api', loginApi);
app.use('/api', logoutApi);
app.use('/api', signupApi);
app.use('/api', allUsers);
app.use('/api', addUser);
app.use('/api', friend);
app.use('/api', storeMessage);
app.use('/api', retriveMessage);

const connectedUsers = {}; // Map usernames to sockets

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join', (username) => {
    connectedUsers[username] = socket.id;
  });

  socket.on('message', async (data) => {
    const recipientSocketId = connectedUsers[data.recipient];
   
      io.to(recipientSocketId).emit('message', data);
  
  });
  

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    
    const usernameToRemove = Object.keys(connectedUsers).find(
      (username) => connectedUsers[username] === socket.id
    );
    if (usernameToRemove) {
      delete connectedUsers[usernameToRemove];
    }
  });
});



app.get("/api/test", verifyToken, (req, res) => {
  // Get the username from the decoded token
  const username = req.user.username; // Assuming your payload has a "username" field

  // Your logic for the protected route here
  res.status(200).json({ message: `Protected data for user ${username}` });
});

app.post("/api/refreshToken", (req, res) => {
  const refreshToken = req.body.refreshToken; // Get the refresh token from the request body
  const SECRET_KEY = "random-secret-key";
  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  // Verify the refresh token
  try {
    const decodedRefreshToken = jwt.verify(refreshToken, SECRET_KEY); // Use the same SECRET_KEY as the access token
    const username = decodedRefreshToken.username; // Assuming your payload has a "username" field

    // Generate a new access token with the updated payload
    const newAccessToken = jwt.sign({ username: username }, SECRET_KEY, {
      expiresIn: "30m",
      algorithm: "HS256",
    });

    return res.status(200).json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }
});





server.listen(port, () => console.log(`Server running on port http://localhost:${port}`));

