const express = require("express")
const router = express.Router()
const Stand = require("../models/stand")

router.post("/create", async (req, res) => {
    try {
        const {standName, owner, items, pictures, location} = req.body

        const newStand = new Stand({standName, owner, items, pictures, location})

        const old = await Stand.findOne({owner})


        if (old){
            return res.status(501).json({message: "Stand already exists"})
        }
        await newStand.save()

        return res.status(200).json({message:"Stand created successfully"})
    } catch(error) {
        console.log(error)
        return res.status(500).json({message:"Error creating Stand"})
    }
})


module.exports = router