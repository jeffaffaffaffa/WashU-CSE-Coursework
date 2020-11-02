const express = require('express');
const router = express.Router();
// require("/socket.io/socket.io.js")

router.get('/', async function(req, res, next) {
  console.log('in hello')
  console.log('io exist?', req.app.settings)
  let db = req.app.settings.db;


  let query = {username: req.session.username};

  let userFeed = []

  // Query the user's information
  db.collection("users").find(query, {projection: {_id: 1, username: 1, textPosts: 1, accountsFollowed: 1, userTheme: 1 }}).toArray(function(err, result) {
    if (err) throw err;
    console.log("start")
    // There should only be one user with the username, so set the user to the result
    let theUser = result[0];

    const userTheme = theUser.userTheme;
    console.log("theUser", theUser)
    console.log("userTheme", userTheme)

    // Create query string that will get the posts for the signed in user and the followed users
    let query = {$or: [ {_id: theUser._id} ] };
    for (i in theUser.accountsFollowed) {
      query.$or.push({_id: theUser.accountsFollowed[i]})
    }

    console.log("query", query)

    let usernames = {}
    usernames[theUser._id] = theUser.username

    // Find all posts of the users
    db.collection("users").find(query).toArray(function (err, result) {
      if (err) throw err;

      let postQuery = {$or: []};
      
      for (i in result) {
        usernames[result[i]._id] = result[i].username;
        for (j in result[i].textPosts) {
          postQuery.$or.push({_id: result[i].textPosts[j]})
        }
      }

      console.log(postQuery.$or.length)
      if (postQuery.$or.length === 0) {
        res.send({
          loggedIn: true,
          message: 'Connection Established (hello)',
          feed: {}
        })
      } else {
        console.log('postQuery', postQuery)
        console.log('usernames', usernames)
  
        // get the content of the text posts
        db.collection('posts').find(postQuery).toArray(function (err, result) {
          if (err) throw err;
          console.log('in');
  
          for (i in result) {
            let temp = false
            if (req.session.username === usernames[result[i].authorId]) {
              temp = true
            }
            let feedObj = {
              postId: result[i]._id,
              myOwn: temp,
              title: result[i].title,
              creator: usernames[result[i].authorId],
              content: result[i].content,
              postTimeStamp: result[i]._id.getTimestamp(),
              reactions: {
                likes: 0,
                dislikes: 0
                // comments:
              },
            }
    
            if (result[i].reactions && result[i].reactions.likes) {
              feedObj.reactions.likes = result[i].reactions.likes;
            }
            if (result[i].reactions && result[i].reactions.dislikes) {
              feedObj.reactions.dislikes = result[i].reactions.dislikes;
            }
            userFeed.push(feedObj);
          }
          // console.log(userFeed)
          res.send({
            loggedIn: true,
            message: 'Connection Established (hello)',
            username: req.session.username,
            feed: userFeed, 
            theme: userTheme
          })
        });
      }
      
    });
  });
});
  
module.exports = router;
