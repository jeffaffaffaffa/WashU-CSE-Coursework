const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
    console.log("username to log out:", req.session.username)
    if (req.session.username) { // Check if signed in
        req.session.destroy(function () { });
        res.send({ message: "User logged out" })
    } else {
        res.send({ message: "Couldn't log out" })
    }
})

module.exports = router;
