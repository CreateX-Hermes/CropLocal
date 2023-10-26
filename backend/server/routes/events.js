const express = require("express")
const router = express.Router()
const Events = require("../models/events")

router.post("/register", async (req, res) => {
    try {
        const {eventName, eventPicture, location, eventCity, eventDate} = req.body

        const newEvent = new Events({eventName, eventPicture, location, eventCity, eventDate})

        const old = await Events.findOne({eventName, location})

        if (old) {
            return res.status(501).json({message: "Event already exists"})
        } 
        await newEvent.save()
        return res.status(200).json({message:"Event created successfully"})
    } catch {
        console.log(error)
        return res.status(500).json({message:"Error creating event"})
    }
})

module.exports = router