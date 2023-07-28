const express = require("express")

const app = express() // It is an express application

const mongoose = require('mongoose');
//const User = require("./src/models/userSchema");
const userController = require('./src/controllers/userController')


//middleware
app.use(express.json())
app.use('/api/user', userController)

/* app.use((req, res, next) => {
    console.log("Inside middleware: ", req.headers['content-type'])
    if (req.headers['content-type'] === "application/json") {
        next()
    } else {
        res.send("Bad Request")
    }
}) */



const db_url = `mongodb+srv://Arghya:PVggeRblpo9SzPmo@sample-cluster.vavnf43.mongodb.net/?retryWrites=true&w=majority`

async function connectDB() {
    try {
        await mongoose.connect(db_url)
        console.log("Connection Secured")
    } 
    catch(err) {
        console.log(err)
    }
}


app.listen(5000, async () => {
    await connectDB()
    console.log(`Listening at port 5000`)
})