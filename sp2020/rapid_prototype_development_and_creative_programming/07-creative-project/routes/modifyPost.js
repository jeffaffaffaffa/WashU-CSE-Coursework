const express = require('express');
const router = express.Router();
let mongo = require('mongodb');

router.post('/', function (req, res, next) {
    let responseMessage = {
        success: false
    }

    const sentTitle = req.body.title;
    const sentContent = req.body.content;
    const postId = req.body.postId;

    console.log("info sent");
    console.log("title", sentTitle);
    console.log("content", sentContent);
    console.log("postId", postId);


    // Title and content must be nonempty to insert post.
    if (sentTitle == null || sentTitle == "" || sentContent == null || sentContent == "") {
        responseMessage.message = "Both title and content must be nonempty";
        res.send(responseMessage);
    } else {
        let db = req.app.settings.db;
        let o_id = new mongo.ObjectID(postId);


        db.collection("users").find({ username: req.session.username }).toArray(function (err, result) {
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
                        message: "can't edit someone else's post"
                    })
                } else {
                    let query = { _id: o_id };
                    let updatedVals = { $set: { title: sentTitle, content: sentContent } };

                    db.collection("posts").updateOne(query, updatedVals, function (err, result) {
                        if (err) throw err;
                        console.log("1 document updated");
                        responseMessage.success = true;
                        responseMessage.message = "Post updated.";
                        res.send(responseMessage);
                    });
                }
            })
        })
    }
})

module.exports = router