const express = require('express')
const router = express.Router()

const userService = require('../services/userService')

router.get("/fetch/:id", async  (req: any, res: any) => {
    try{
        //console.log("Req params: " , req.params['id'])
       // console.log("control is here")
        let fetchedUser = await userService.fetchUser(req.params['id'])
        
        res.send(fetchedUser)
    } catch (err) {
        console.log(err)
        res.send("Bad Request")
    }
   
})

router.post("/add", async (req: any, res: any) => {
    try{
        console.log("control is here : Post")
        console.log("Request body: ", req.body)
        
        let savedUser = await userService.createUser(req.body)
        res.json(savedUser)

    } catch (err) {
        console.log(err)
    }
    
})

router.put("/update/:id",  async (req: any, res: any) => {
    console.log("control is here: Put")
    console.log("Params: ", req.params['id'])

    try {
        const id = req.params.id
        let updatedUser = await userService.updateUser(id, req.body)
        res.json(updatedUser)
    } catch(err) {
        console.log(err)
    }
})

router.delete("/delete/:id", async (req: any, res: any) => {
    console.log("control is here: Del")
    try {
        let id = req.params.id
        let deletedUser = await userService.deleteUser(id)
        res.json(deletedUser)
    }catch(err) {
        console.log(err)
    }
})

export default router