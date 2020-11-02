const express = require('express');
const router = express.Router();

// Only POST requests should be sent to login.
router.get('/', function(req, res, next) {
    res.send({
        success: false,
        message: "Must be a post request"
    })
})

// First, check if the username already exists
router.post('/', function(req, res, next) {
    const db = req.app.settings.db;
    db.collection("users").find({username: req.body.username}).toArray(function(err, result) {
        if (err) throw err
        if (result.length > 0) {
            console.log("duplicate username");
            res.send({
                success: false,
                message: "The username " + req.body.username + " already exists. Please choose another."
            })
            res.end(); // Do not continue
        } else {
            next();
        }
    })
})

// If the username doesn't already exist, set it up
router.post('/', function(req, res, next) {
    // Check that a username and password are actually sent
    if (req.body.username.length > 0 && req.body.password.length > 0) {
        // TODO: hash password
        const db = req.app.settings.db;
        let insertedUser = {
            username: req.body.username,
            password: req.body.password // TODO: hash password
        }
        db.collection("users").insertOne(insertedUser, function(err, result) {
            if (err) throw err
            console.log("User created")
            res.send({
                success: true,
                connectionMessage: "User " + req.body.username + " created."
            })
        })
    } else {
        res.send({
            success: false,
            connectionMessage: "Must enter a username and password."
        })
    }
})

module.exports = router;
