const express = require('express')
const router = express.Router()
const User = require("../models/userSchema");
const userService = require('../services/userService')

router.get("/fetch/:id", async  (req, res) => {
    try{
        //console.log("Req params: " , req.params['id'])
       // console.log("control is here")
        let fetchedUser = await userService.fetchedUser(req.params['id'])
        
        res.send(fetchedUser)
    } catch (err) {
        console.log(err)
        res.send("Bad Request")
    }
   
})

router.post("/add", async (req, res) => {
    try{
        console.log("control is here : Post")
        console.log("Request body: ", req.body)
        
        let savedUser = await userService.createUser(req.body)
        res.json(savedUser)

    } catch (err) {
        console.log(err)
    }
    
})

router.put("/update",  (req, res) => {
    console.log("control is here: Put")
})

router.delete("/delete",  (req, res) => {
    console.log("control is here: Del")
})

module.exports = router