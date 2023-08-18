const { getUserCollection } = require("../database/mongoDB");
const bcrypt = require("bcrypt");

exports.signup = (request, response) => {
    const userCollection = getUserCollection();
    const bcryptPassword = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync());
    
    // Get the base64 profile picture from the request body
    const base64ProfilePic = request.body.profilePic;
  
    // Insert the user with the profile picture into the database
    userCollection.insertOne({
      username: request.body.username,
      email: request.body.email,
      password: bcryptPassword,
      description: request.body.description,
      profilePic: base64ProfilePic, // Store the base64 profile picture
    }).then(() => {
      response.status(200).json({
        message: `New user added, Welcome ${request.body.username}`,
      });
    });
  };
  