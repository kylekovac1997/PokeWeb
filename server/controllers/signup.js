const { getUserCollection } = require("../database/mongoDB");
const bcrypt = require("bcrypt");

exports.signup =  (request, response) => {
    const userCollection = getUserCollection()
    const bcryptPassword = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync()) 
    userCollection.insertOne({username: request.body.username, email: request.body.email, password: bcryptPassword}).then((_)=>{
        response.status(200).json({
            message:`New user added, Welcome${request.body.username}`
        })
    })
}