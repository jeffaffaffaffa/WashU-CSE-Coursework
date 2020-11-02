const express = require('express');
const router = express.Router();

// Only POST requests should be sent to login.
router.get('/', function(req, res, next) {
    res.send({
        success: false,
        message: "Must be a post request"
    })
})

/
router.post('/', function(req, res, next) {
    // Check that a username and password are actually sent
    if (req.body.username.length > 0 && req.body.password.length > 0) {
        // TODO: hash password
        const db = req.app.settings.db;
        let query = {username: req.body.username, password: req.body.password}
        db.collection("users").find(query).toArray(function(err, result) { // Search the database for the username/password combo
            if (err) throw err

            if (result.length > 0) { // Check if the username/password is correct
                result = result[0];
                req.session.username = req.body.username; // Set username field in session
                res.send({ // Send success message
                    success: true,
                    message: req.body.username + " signed in successfully"
                })
            } else {
                res.send({ // Send failure to sign in message
                    success: false,
                    message: "Username/password combo incorrect."
                })
            }
        })
    } else {
        res.send({
            success: false,
            message: "Must enter a username and password."
        })
    }
})

module.exports = router;
