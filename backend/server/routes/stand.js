const express = require("express")
const router = express.Router()
const Stand = require("../models/stand")
const User = require("../models/user")

router.post("/create", async (req, res) => {
    try {
        const {standName, userID, items, pictures} = req.body

        var ObjectId = require('mongodb').ObjectId
        var newID = new ObjectId(userID)

        const user = await User.findOne({_id: newID})
        
        let location = user.location
        let owner = user._id
        let ownerName = user.firstName
        let city = user.city

        const newStand = new Stand({standName, owner, items, pictures, location, ownerName, city})

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
        const { longitude, latitude, radius, userID} = req.body;
        const userCoordinates = [parseFloat(longitude), parseFloat(latitude)]; 
        var ObjectId = require('mongodb').ObjectId
        var newID = new ObjectId(userID)

        // Perform a geospatial query using $geoNear and $maxDistance
        const stands = await Stand.aggregate(
            [
            {
                $geoNear: {
                    near: {
                        mainType: 'Point',
                        coordinates: userCoordinates,
                    },
                    distanceField: 'distance',
                    maxDistance: parseFloat(radius) * 1609.34, // Convert radius to miles
                    spherical: true,
                },
            },
            {
                $match: {
                    $expr: {
                        $ne: ["$owner", newID]
                    }
                }
            }
        ]);

        let user = await User.findOne(
            {_id : userID}
        )
        

        const objectIdsToCheck = user.favoriteStands;
        console.log(objectIdsToCheck)

        const standsWithExistence = stands.map(stand => {
        const favorite = objectIdsToCheck.includes(stand._id.toString());
        return { ...stand, favorite };
        });


        return res.status(200).json(standsWithExistence);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error finding stands within radius" });
    }
})

router.post("/findFavoriteWithinRadius", async (req, res) => {
    try {
        const { longitude, latitude, radius, userID} = req.body;
        const userCoordinates = [parseFloat(longitude), parseFloat(latitude)]; 
        var ObjectId = require('mongodb').ObjectId
        var newID = new ObjectId(userID)

        let user = await User.findOne(
            {_id : userID}
        )
        

        const objectIdsToCheck = user.favoriteStands;
        console.log(objectIdsToCheck)

        // Perform a geospatial query using $geoNear and $maxDistance
        const stands = await Stand.aggregate(
            [
            {
                $geoNear: {
                    near: {
                        mainType: 'Point',
                        coordinates: userCoordinates,
                    },
                    distanceField: 'distance',
                    maxDistance: parseFloat(radius) * 1609.34, // Convert radius to miles
                    spherical: true,
                },
            },
            {
                $match: {
                    $expr: {
                        $and: [
                            { $ne: ["$owner", newID]},
                            { $in: ["$_id", objectIdsToCheck]}
                        ]
                    }
                }
            }
        ]);

        

        const standsWithExistence = stands.map(stand => {
        const favorite = objectIdsToCheck.includes(stand._id.toString());
        return { ...stand, favorite };
        });


        return res.status(200).json(standsWithExistence);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error finding stands within radius" });
    }
})




module.exports = router