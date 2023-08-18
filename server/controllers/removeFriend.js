const { getFriendsCollection } = require("../database/mongoDB");

exports.deleteUser = async (request, response) => {
  try {
    const userCollection = getFriendsCollection();
    const username = request.body.username;
    const currentUser = request.body.currentUser;

    const currentUserData = await userCollection.findOne({ user: currentUser });

    if (!currentUserData) {
      response.status(400).json({ error: "Current user not found" });
      return;
    }

    const friendsArray = currentUserData.friends;
    const isFriendIndex = friendsArray.findIndex(friend => friend.username === username);

    if (isFriendIndex === -1) {
      response.status(400).json({ error: "Friend not found" });
      return;
    }

    // Remove the friend from the current user's friends array
    const updatedFriends = friendsArray.filter((friend, index) => index !== isFriendIndex);

    await userCollection.updateOne(
      { user: currentUser },
      { $set: { friends: updatedFriends } }
    );

    // Remove the current user from the friend's list of friends
    await userCollection.updateOne(
      { user: username },
      { $pull: { friends: { username: currentUser } } }
    );

    response.json({ message: "Friend removed successfully" });
  } catch (error) {
    response.status(500).json({ error: "An error occurred while removing friend" });
  }
};
