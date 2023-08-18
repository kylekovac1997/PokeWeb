const { getMessageCollection } = require("../database/mongoDB");

exports.storeMessage = async (request,response) => {
    const messageCollection = getMessageCollection();

    const sendMessageTextInput = request.body.message;
    const friend = request.body.recipient;
    const sessionUsername = request.body.sender; 
    const users = [sessionUsername, friend];
    const usersSorted = users.sort();
    const message = {
      sender: sessionUsername,
      message: sendMessageTextInput
    };
  
    try {
      const result = await messageCollection.findOne({ users: usersSorted });
      if (result) {
        await messageCollection.updateOne(
          { users: usersSorted },
          { $push: { message: message } }
        );
      } else {
        await messageCollection.insertOne({
          users: usersSorted,
          message: [message]
        });
      }
      response.status(200).send("Message stored successfully");
    } catch (error) {
      console.error("Error storing message:", error);
      response.status(500).send("Internal server error");
    }
  };