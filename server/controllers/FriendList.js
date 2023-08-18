const { getFriendsCollection } = require("../database/mongoDB");

exports.users = async (request, response) => {
  const friendsCollection = getFriendsCollection();
  const currentUser = request.body.currentUser
  friendsCollection
    .findOne({ user:currentUser})
    
    .then((result) => {
      if (result) {
        const friends = result.friends;
        response.json({friends} );
      } else {
        response.json({friends: []});
      }
    });
};
