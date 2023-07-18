const express = require("express")

const app = express() // It is an express application

app.get("/api/:id",  (req, res) => {
    console.log("Req params: " , req.params['id'])
    console.log("control is here")
    res.send(`<h2>The respone id is : ${req.params['id']}</h2>`)
})

app.post("/api",  (req, res) => {
    console.log("control is here: Post")
})

app.put("/api",  (req, res) => {
    console.log("control is here: Put")
})

app.delete("/api",  (req, res) => {
    console.log("control is here: Del")
})



app.listen(5000, () => {
    console.log(`Listening at port 5000`)
})