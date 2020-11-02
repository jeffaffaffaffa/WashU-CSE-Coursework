const express = require('express');
const router = express.Router();
let mongo = require('mongodb');
// require("/socket.io/socket.io.js")

router.post('/', async function (req, res, next) {
    let responseMessage = {
        success: false
    }
    let db = req.app.settings.db;
    let o_id = new mongo.ObjectID(req.body.postId);

    let query = { _id: o_id };

    let updatedVals = { $inc: { "reactions.likes": 1 } };

    db.collection("posts").updateOne(query, updatedVals, function (err, result) {
        if (err) throw err;
        console.log("1 like");
        responseMessage.success = true;
        responseMessage.message = "like added.";
        res.send(responseMessage);
    });
})

module.exports = router;
