const router = require("express").Router();

let user = require("../models/user.model"); // 스키마 가져오기

router.route("/").get((req, res) => {
    user.find() // 몽고 디비에 있는 모든 것을 들고 온다.
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
    console.log(req.body);
    const username = req.body.username; // request body 에 username 이 존재.
    const newUser = new user({ username });

    newUser
        .save()
        .then(() => res.json("user add!"))
        .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
