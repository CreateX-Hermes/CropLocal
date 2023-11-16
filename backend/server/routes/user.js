const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, prepassword, location, city } =
      req.body;

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(prepassword, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      location,
      city,
    });

    const old = await User.findOne({ email });

    if (old) {
      return res
        .status(501)
        .json({ message: "User already exists, login instead" });
    }
    await newUser.save();

    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating user" });
  }
});

const createToken = (
  userID,
  userLocation,
  firstName,
  lastName,
  email,
  isSeller
) => {
  const payload = {
    userID: userID,
    location: userLocation,
    firstName: firstName,
    lastName: lastName,
    email: email,
    isSeller: isSeller,
  };
  const token = jwt.sign(payload, "JohannesQian", { expiresIn: "31d" });
  return token;
};

router.post("/login", async (req, res) => {
  try {
    const { email, prepassword } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(500)
        .json({ message: "User does not exist, create account instead" });
    }
    const result = await bcrypt.compare(prepassword, user.password);

    if (!result) {
      return res.status(403).send({ message: "Incorrect Password!" });
    }

    const token = createToken(
      user._id,
      user.location.coordinates,
      user.firstName,
      user.lastName,
      user.email,
      user.isSeller
    );
    return res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error logging in" });
  }
});

router.get("/getUserLocation", async (req, res) => {
  try {
    const { userID } = req.query;

    var ObjectId = require("mongodb").ObjectId;
    var newID = new ObjectId(userID);

    const user = await User.findOne({ _id: newID });

    if (!user) {
      return res.status(501).json({ message: "User does not exist" });
    }
    const userLocation = user.location;

    return res.status(200).send(userLocation);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error" });
  }
});

router.post("/updateNameEmail", async (req, res) => {
  try {
    let { userID, firstName, email } = req.body;
    var ObjectId = require("mongodb").ObjectId;
    userID = new ObjectId(userID);
    console.log(email)
    console.log(firstName)
    console.log(req.body)
    await User.findOneAndUpdate({ _id: userID }, {email: email, firstName: firstName});

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error" });
  }
});

router.post("/updateFavoriteStands", async (req, res) => {
  try {
    let { userID, standID } = req.body;
    var ObjectId = require("mongodb").ObjectId;
    userID = new ObjectId(userID);
    standID = new ObjectId(standID);

    await User.updateOne({ _id: userID }, [
      {
        $addFields: {
          favoriteStands: {
            $cond: {
              if: { $in: [standID, "$favoriteStands"] },
              then: { $setDifference: ["$favoriteStands", [standID]] },
              else: { $concatArrays: ["$favoriteStands", [standID]] },
            },
          },
        },
      },
    ]);

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error" });
  }
});

router.post("/getUserInfo", async (req, res) => {
  try {
    let { userID } = req.body;
    var ObjectId = require("mongodb").ObjectId;
    userID = new ObjectId(userID);

    let user = await User.findOne({ _id: userID });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
