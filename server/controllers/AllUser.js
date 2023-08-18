const { getUserCollection } = require("../database/mongoDB");

exports.users = async (request, response) => {
  try {
    const userCollection = getUserCollection();
    
    const usernames = await userCollection.find({}, { projection: { username: 1, _id: 1 } }).toArray();
    
    response.json(usernames );
  } catch (error) {
    console.error("Error fetching usernames:", error);
    response.status(500).json({ error: "An error occurred while fetching usernames" });
  }
};
