const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_EXPIRATION = "1h"; // Access token expires in 1 minute
const REFRESH_TOKEN_EXPIRATION = "30m"; // Refresh token expires in 30 minutes
const SECRET_KEY = "random-secret-key";

const generateAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, SECRET_KEY, {
    expiresIn: ACCESS_TOKEN_EXPIRATION,
    algorithm: "HS256",
  });
  return accessToken;
};

const generateRefreshToken = (payload) => {
  const refreshToken = jwt.sign(payload, SECRET_KEY, {
    expiresIn: REFRESH_TOKEN_EXPIRATION,
    algorithm: "HS256",
  });
  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
