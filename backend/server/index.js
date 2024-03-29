const express = require("express")
const bodyParser = require("body-parser")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
require('dotenv').config()

const app = express()
const mongoose = require("mongoose")
const port = 8000
const cors = require("cors")
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
const jwt = require("jsonwebtoken")

const User = require("./models/user")
const Stand = require("./models/stand")
const Item = require("./models/item")

mongoose.connect(process.env.DB_URL, 
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

const userRoute = require("./routes/user")
app.use("/user", userRoute)

const standRoute = require("./routes/stand")
app.use("/stand", standRoute)