const express = require('express');
const {verifyToken} = require("./controllers/checkToken")
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 4000;
const AllPokemonApi = require('./Routes/PokeBoxApi');
const loginApi = require("./Routes/LoginApi")
const logoutApi = require("./Routes/logoutApi")
const signupApi = require("./Routes/signupApi")
const cors = require('cors');
const { connectToMongoDb } = require("./database/mongoDB.js");
const rateLimit = require('express-rate-limit');
connectToMongoDb();
require("dotenv").config()
app.use(cors());
app.use(express.json());

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes (time window for rate limiting)
  max: 100, // requests per IP per time window
  message: 'Too many requests, please try again later.',
});

// Api to grab pokemon data {gifs, images, names, hp, moves, etc } 
app.use('/api', AllPokemonApi); 
// Api that handles login routes
app.use('/api', loginApi);
// Api tha handles logout routes
app.use('/api', logoutApi);
// Api tha handles signup routes
app.use('/api', signupApi);

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





app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
 
