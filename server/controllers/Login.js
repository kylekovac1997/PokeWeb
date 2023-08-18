const { getUserCollection } = require("../database/mongoDB");
const bcrypt = require("bcrypt");
const {generateAccessToken, generateRefreshToken } = require("./AuthToken")

exports.login = async (request, response) => {
  try {
    const { username, password } = request.body;
    const userCollection = getUserCollection();
    
    // Checks to see if input fields are filled in
    if (!username || !password) {
      return response.status(400).json({
        error: !username && !password
          ? "Username & Password fields required!"
          : !username
          ? "Username field required!"
          : !password
          ? "Password field required!"
          : null,
      });
    }
    
    // connects to user Collections on MongoDB
    const user = await userCollection.findOne({ username: username });

    if (user) {
      // Compare the entered password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
       const userData = await userCollection.findOne({username:username})
        const accessToken = generateAccessToken({username: user.username });
        const refreshToken = generateRefreshToken({username: user.username});
        return response.status(200).json({ accessToken, refreshToken, userData  })
        
      } else {
        return response.status(401).json({ error: "Invalid username or password" });
      }
    } else {
      return response.status(401).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    console.log(err)
    return response.status(500).json("Internal Server Error");
  }
};
