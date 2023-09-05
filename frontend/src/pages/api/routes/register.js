const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/", async (req, res) => {
    const {firstName, lastName, email, password} = req.body

    const newUser = new User({firstName, lastName, email, password})

    try{
        await newUser.save()
        return res.status(200).json({message:"User created successfully"})
    } catch(error) {
        return res.status(500).json({message:"Error creating user"})
    }
    

})

module.exports = router