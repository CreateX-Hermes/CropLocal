const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
    try{
        const {firstName, lastName, email, prepassword} = req.body

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(prepassword, salt)

        const newUser = new User({firstName, lastName, email, password})

        const old = await User.findOne({email})


        if (old){
            return res.status(501).json({message: "User already exists, login instead"})
        }
        await newUser.save()

        return res.status(200).json({message:"User created successfully"})
    } catch(error) {
        console.log(error)
        return res.status(500).json({message:"Error creating user"})
    }
    
})


const createToken = (userID) => {
    const payload = {
        userID: userID
    }

    const token = jwt.sign(payload, "testtest", {expiresIn: "1h"})
    return token
}

router.post("/login", async (req, res) => {
    try{
        const {email, prepassword} = req.body

        const user = await User.findOne({email})


        if (!user){
            return res.status(500).json({message: "User does not exist, create account instead"})
        }
        const result = await bcrypt.compare(prepassword, user.password)

        if (!result) {
            return res.status(403).send({message: "Incorrect Password!"})
        } 

        const token = createToken(user._id)
        
        return res.status(200).send({token})


    } catch(error) {
        console.log(error)
        return res.status(500).json({message:"Error logging in"})
    }

    
})

module.exports = router