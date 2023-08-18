require("dotenv").config()
const { MongoClient } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_DATABASE_CONNECTION_STRING ) 
let userCollection;
let friendsCollection;
let messageCollection;
 const connectToMongoDb = async()=>{
    try{
        await client
        .connect()
        .then((_)=>{
            const db = client.db("PokemonDB");
            userCollection = db.collection("Users");
            friendsCollection = db.collection("FriendsList");
            messageCollection = db.collection("MessageStorage");
        })
    }catch(error){
        console.log(error)
    }
}

 const getUserCollection = () => userCollection;
 const getFriendsCollection = () => friendsCollection;
 const getMessageCollection= () => messageCollection;
 module.exports = {
    getUserCollection,
    getFriendsCollection,
    getMessageCollection,
    connectToMongoDb,
 }
