const express = require("express")
const bodyParser = require("body-parser")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const app = express()
const mongoose = require("mongoose")
const port = 8000
const cors = require("cors")
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
const jwt = require("jsonwebtoken")

DB_URL = "mongodb+srv://croplocaldb:ewtY4y0ybOFLDFfy@croplocal.ua4sout.mongodb.net/CropLocalDB"

mongoose.connect(DB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then( () => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log("Error connecting to MongoDB")
})

app.listen(port, () => {
    console.log("Listening on port: ", port)
})
// const registerRoute = require("./routes/register")

// app.use("/register", registerRoute)

const User = require("./models/user")
const Stand = require("./models/stand")
const Item = require("./models/item")


app.post("/register", async (req, res) => {
    console.log(req.body)
    const {firstName, lastName, email, password} = req.body

    const newUser = new User({firstName, lastName, email, password})
    console.log("test")

    // newUser.save().then((response) => {
    //     return res.status(200).json({message:"User created successfully"})
    // }).catch((error) => {
    //     return res.status(500).json({message:"Error creating user"})
    // })
    try{
        await newUser.save()
        return res.status(200).json({message:"User created successfully"})
    } catch(error) {
        return res.status(500).json({message:"Error creating user"})
    }
    

})