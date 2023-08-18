const { getFriendsCollection } = require("../database/mongoDB");

exports.user = async (request, response) => {
  try {
    const userCollection = getFriendsCollection();
    const username = request.body.username;
    const currentUser = request.body.currentUser;

    const currentUserData = await userCollection.findOne({ user: currentUser });

    if (currentUserData) {
      const friendsArray = currentUserData.friends;
      const isFriend = friendsArray.some(friend => friend.username === username);

      if (isFriend) {
        response.status(400).json({ error: "Friend already exists" });
      } else {
        const updatedFriends = [...friendsArray, { username, isFriend: true }];

        await userCollection.updateOne(
          { user: currentUser },
          { $set: { friends: updatedFriends } }
        );

        // Update isFriend property for the added user
        await userCollection.updateOne(
          { user: username },
          { $push: { friends: { username: currentUser, isFriend: true } } }
        );

        response.json({ message: "Friend added successfully" });
      }
    } else {
      const newFriend = { username, isFriend: true };

      await userCollection.insertOne({
        user: currentUser,
        friends: [newFriend],
      });

      // Update isFriend property for the added user
      await userCollection.updateOne(
        { user: username },
        { $push: { friends: { username: currentUser, isFriend: true } } }
      );

      response.json({ message: "Friend added successfully" });
    }
  } catch (error) {
    response.status(500).json({ error: "An error occurred while adding friend" });
  }
};
