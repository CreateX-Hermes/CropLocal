const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")

router.post("/register", async (req, res) => {
    try{
        const {firstName, lastName, email, prepassword} = req.body

        const salt = await bcrypt.genSalt(10)

        const password = await bcrypt.hash(prepassword, salt)

        const newUser = new User({firstName, lastName, email, password})

        const old = await User.findOne({email})


        if (old){
            return res.status(500).json({message: "User already exists, login instead"})
        }
        await newUser.save()

        return res.status(200).json({message:"User created successfully"})
    } catch(error) {
        console.log(error)
        return res.status(500).json({message:"Error creating user"})
    }
    
})

module.exports = router