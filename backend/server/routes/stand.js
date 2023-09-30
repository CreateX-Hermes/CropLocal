const express = require("express")
const router = express.Router()
const Stand = require("../models/stand")
const User = require("../models/user")

router.post("/create", async (req, res) => {
    try {
        const {standName, userEmail, items, pictures} = req.body

        const user = await User.findOne({email: userEmail})
        let location = user.location
        let owner = user._id

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

router.post("/findWithinRadius", async (req, res) => {
    try {
        const { lat, lng, radius } = req.body;
        const userCoordinates = [parseFloat(lng), parseFloat(lat)]; 

        // Perform a geospatial query using $geoNear and $maxDistance
        const stands = await Stand.aggregate([
            {
                $geoNear: {
                    near: {
                        mainType: 'Point',
                        coordinates: userCoordinates,
                    },
                    distanceField: 'distance',
                    maxDistance: parseFloat(radius) * 1000, // Convert radius to meters
                    spherical: true,
                },
            },
        ]);

        console.log(stands)

        return res.status(200).json(stands);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error finding stands within radius" });
    }
})


module.exports = router