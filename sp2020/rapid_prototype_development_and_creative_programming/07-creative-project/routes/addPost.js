const express = require('express');
const router = express.Router();
let mongo = require('mongodb');

router.post('/', function (req, res, next) {
    let responseMessage = {
        success: false
    }

    const sentTitle = req.body.title;
    const sentContent = req.body.content;
    // Title and content must be nonempty to insert post.
    console.log("addpost", responseMessage)
    console.log("before")

    responseMessage.success = true;
    console.log("after")
    console.log("addpost", responseMessage)
    if (sentTitle == null || sentTitle == "" || sentContent == null || sentContent == "") {
        responseMessage.message = "Both title and content must be nonempty";
        res.send(responseMessage);
    }

    console.log('not empty')

    let db = req.app.settings.db;
    let query = { username: req.session.username }

    // Get the user's _id
    db.collection("users").find(query).toArray(function (err, result) {
        result = result[0];
        let tempData = {
            authorId: result._id,
            title: sentTitle,
            content: sentContent,
        }

        // Insert the post
        db.collection("posts").insertOne(tempData, function (err, response) {
            if (err) throw err;
            console.log('response', tempData._id)

            db.collection("users").update(query, { $push: { textPosts: response.insertedId } })
            console.log("1 document inserted")

            // Return response to front end
            responseMessage.success = true;
            responseMessage.message = "New post added."
            res.send(responseMessage);
        })
    });
    // let responseMessage = {
    //     success: false
    // }
    // // Title and content must be nonempty to insert post.
    // console.log("addpost", responseMessage)
    // console.log("before")

    // responseMessage.success = true;
    // console.log("after")
    // console.log("addpost", responseMessage)
    // if (sentTitle == null || sentTitle == "" || sentContent == null || sentContent == "") {
    //     responseMessage.message = "Both title and content must be nonempty";
    //     res.send(responseMessage);
    // }

    // let db = req.app.settings.db;
    // let query = { username: req.session.username }

    // // Get the user's _id
    // db.collection("users").find(query).toArray(function (err, result) {
    //     result = result[0];
    //     let tempData = {
    //         authorId: result._id,
    //         title: sentTitle,
    //         content: sentContent,
    //     }

    //     console.log('in db')

    //     // Insert the post
    //     db.collection("posts").insertOne(tempData, function (err, response) {
    //         if (err) throw err;
    //         console.log('response', tempData._id)

    //         db.collection("users").update(query, { $push: { textPosts: response.insertedId } })
    //         console.log("1 document inserted")

    //         // Return response to front end
    //         responseMessage.success = true;
    //         responseMessage.message = "New post added."
    //         res.send(responseMessage);
    //     })
    // });
});

module.exports = router;
