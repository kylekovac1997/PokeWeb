require("dotenv").config()
const { MongoClient } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_DATABASE_CONNECTION_STRING ) 
let userCollection;
 const connectToMongoDb = async()=>{
    try{
        await client
        .connect()
        .then((_)=>{
            const db = client.db("PokemonDB");
            userCollection = db.collection("Users");
        })
    }catch(error){
        console.log(error)
    }
}

 const getUserCollection = () => userCollection;

 module.exports = {
    getUserCollection,
    connectToMongoDb,
 }
