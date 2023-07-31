const express = require('express')

const app = express() // It is an express application
//const mongoose = require('mongoose');
import userController from './src/controllers/userController'
import { initializeDataSource } from './src/repository/initializeDataSource'


//middleware
app.use(express.json())
app.use('/api/user', userController)





//const db_url = `mongodb+srv://Arghya:PVggeRblpo9SzPmo@sample-cluster.vavnf43.mongodb.net/?retryWrites=true&w=majority`

/* async function connectDB() {
    try {
        //await mongoose.connect(db_url)
        console.log("Connection Secured - Mongo")
    } 
    catch(err) {
        console.log(err)
    }
} */


app.listen(5000, async () => {
    //await connectDB()
    await initializeDataSource()
    console.log(`Listening at port 5000`)
})