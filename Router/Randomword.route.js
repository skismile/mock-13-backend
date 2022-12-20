const express = require("express");
const app = express.Router();
const randomWords =require("random-words")

app.get("/", async (req, res) =>{


res.send(randomWords())


})



module.exports=app