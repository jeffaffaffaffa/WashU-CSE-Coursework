const express = require('express');
const router = express.Router();
// require("/socket.io/socket.io.js")

router.post('/', async function (req, res, next) {
    let responseMessage = {
        success: false
    }
    console.log('follow has been called')
    const db = req.app.settings.db;
    // let query = { username: req.session.username };

    db.collection("users").find({username: req.body.newUserToFollow}).toArray(function(err, result) {
        console.log('results of finding new user to put in', result)
        if (result.length > 0) {
            db.collection("users").updateOne({ username: req.session.username }, { $push: { accountsFollowed: result[0]._id } }, function (err, results) {
                if (err) throw err;
                console.log("1 document updated (follow)");
                responseMessage.success = true;
                responseMessage.message = "Theme updated.";
                res.send(responseMessage);
            })
        } else {
            res.send({
                success: false,
                message: "user doesn't exist"
            })
        }
        
    })
})

module.exports = router;
