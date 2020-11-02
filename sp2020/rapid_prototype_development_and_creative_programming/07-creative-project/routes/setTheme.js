const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    let responseMessage = {
        success: false
    }
    console.log('setTheme has been called')
    const db = req.app.settings.db;
    let query = { username: req.session.username };
    let updatedVals = { $set: { userTheme: req.body.theme } };
    db.collection("users").updateOne(query, updatedVals, function (err, result) {
        console.log('in')
        if (err) throw err;
        console.log("1 document updated (theme)");
        responseMessage.success = true;
        responseMessage.message = "Theme updated.";
        res.send(responseMessage);
    });
})

module.exports = router;
