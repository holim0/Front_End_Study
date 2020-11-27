const router = require("express").Router();

let user = require("../models/user.model"); // 스키마 가져오기

router.route("/").get((req, res) => {
    user.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const newUser = new user({ username });

    newUser
        .save()
        .then(() => res.json("user add!"))
        .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
