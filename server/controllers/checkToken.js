const jwt = require("jsonwebtoken");
const SECRET_KEY = "random-secret-key"; // Define the secret key once

// ...

const verifyToken = (request, response, next) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return response.status(401).json({ error: "Access token missing or invalid" });
  }

  const token = authorizationHeader.substring(7);

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return response.status(403).json({ error: "Invalid access token" });
    }
    
    // Assuming your payload has a "username" field
    const username = decoded.username;
    
    // Attach the username to the request object for further use in protected routes
    request.user = {
      ...decoded,
      username: username,
    };

    next();
  });
};

module.exports = { verifyToken };
