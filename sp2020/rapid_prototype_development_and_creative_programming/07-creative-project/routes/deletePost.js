const express = require('express');
const router = express.Router();
let mongo = require('mongodb');

router.post('/', function (req, res, next) {
    let responseMessage = {
        success: false
    }
    let db = req.app.settings.db;
    let query = { username: req.session.username }
    let o_id = new mongo.ObjectID(req.body.postId);
    // Get the user's _id
    db.collection("users").find(query).toArray(function (err, result) {
        let userResult = result[0];


        db.collection("posts").find({ _id: o_id }).toArray(function (err, result) {
            if (err) throw err
            console.log(result[0].authorId)
            console.log(userResult._id)
            console.log(result[0].authorId.toString() !== userResult._id.toString())
            // console.log(result[0].authorId.toString().localeCompare(userResult._id.toString()))
            if (result[0].authorId.toString() !== userResult._id.toString()) {
                res.send({
                    success: false,
                    message: "can't delete someone else's post"
                })
            } else {
                // Remove the objectid from the user's textPosts array
                db.collection("users").update({ _id: userResult._id }, { $pull: { textPosts: o_id } }, function (err, result) {
                    if (err) throw err
                    console.log("Deleted from the user");

                    // Delete the post object from the posts collection
                    db.collection("posts").deleteOne({ _id: o_id }, function (err, result) {
                        if (err) throw err;
                        console.log("Deleted post")
                    })

                    responseMessage.success = true;
                    responseMessage.message = "Post deleted.";
                    //return responseMessage;
                    res.send(responseMessage);
                })
            }
        })
    });
})

module.exports = router