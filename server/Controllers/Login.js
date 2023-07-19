const { getUserCollection } = require("../database/mongoDB");
const bcrypt = require("bcrypt");

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
        request.session.user = user;
        response.status(200).json({ message: "User login successful" });
        console.log(request.session.user);
      } else {
        response.status(401).json({ error: "Invalid username or password" });
      }
    } else {
      response.status(401).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    response.status(500).json("Internal Server Error");
  }
};
