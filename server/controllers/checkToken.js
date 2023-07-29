const jwt = require("jsonwebtoken");
const SECRET_KEY = "random-secret-key"; 



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
    
    
    const username = decoded.username;
    
   
    request.user = {
      ...decoded,
      username: username,
    };

    next();
  });
};

module.exports = { verifyToken };
