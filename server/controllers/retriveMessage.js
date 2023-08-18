const { getMessageCollection } = require("../database/mongoDB");

exports.retriveMessage = async (request, response) => {
  const messageCollection = getMessageCollection();

  try {
    const sessionUsername = request.query.sender; 
    const friend = request.query.friend; 
    const users = [sessionUsername, friend];
    const usersSorted = users.sort();

    const conversation = await messageCollection.findOne({
      users: usersSorted,
    });

    if (conversation) {
      response.status(200).json(conversation.message); 
    } else {
      response.status(404).json({ message: "No conversation found" });
    }
  } catch (error) {
    console.error("Error fetching messages:", error);
    response.status(500).json({ error: "Internal server error" });
  }
};
