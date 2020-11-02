const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const helloRouter = require('./routes/hello');
const addPostRouter = require('./routes/addPost');
const modifyPostRouter = require('./routes/modifyPost');
const deletePostRouter = require('./routes/deletePost');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const registerRouter = require('./routes/register')
const setThemeRouter = require('./routes/setTheme')
const followRouter = require('./routes/follow')
const likeRouter = require('./routes/like');
const dislikeRouter = require('./routes/dislike');


// var express = require('express');
// var cookieParser = require('cookie-parser');
var session = require('express-session');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// // FIXME: Is this okay??
// require('./database')

const { MongoClient } = require("mongodb");
const mongoConnectUrl = "mongodb+srv://CreativeProjectUser:ConnectToCreativeProject@330creativeproject-4eeyr.mongodb.net/test?retryWrites=true&w=majority";
// const mongoConnectUrl = "mongodb+srv://CreativeProjectUser:ConnectToCreativeProject@330creativeproject-4eeyr.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

// The database to use
const dbName = "330CreativeProjectDb";
MongoClient.connect(mongoConnectUrl, { useUnifiedTopology: true })
  .then(async client => {
    console.log('Connected to Database')
    const db = client.db(dbName);
    app.set("db", db); // FIXME: IS this okay to do?

    app.use(cookieParser());
    app.use(session({ secret: "Shh, its a secret!" })); // TODO: random byte string

    // Check if it's a signed in user for every request, except for loginAndRegister
    app.use(function (req, res, next) {
      console.log('check if signed in');
      console.log(req.url)
      if (req.session.username) { // If the user is logged in, continue with the request
        next()
      } else if (req.url === "/login" || req.url === "/register") { // If use is trying to login or register, allow request
        next()
      } else { // Otherwise, send this error and execute error function
        const err = new Error("Not logged in!");
        console.log('error!');
        next(err)
      }
    })

    // Called if there is an error initially
    app.use(function (err, req, res, next) {
      console.log("error: not signed in!")
      res.send({
        loggedIn: false,
        message: "user must log in"
      })
      return res.end(); // Stop the request from going through
    })

    // Routers
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/hello', helloRouter);
    app.use('/addPost', addPostRouter);
    app.use('/modifyPost', modifyPostRouter);
    app.use('/deletePost', deletePostRouter);
    app.use('/login', loginRouter);
    app.use('/logout', logoutRouter);
    app.use('/register', registerRouter);
    app.use('/setTheme', setThemeRouter);
    app.use('/follow', followRouter);
    app.use('/like', likeRouter);
    app.use('/dislike', dislikeRouter);

    // FIXME: why do these have to be here?

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      console.log('404 Error!')
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  })
  .catch(error => console.error(error))

module.exports = app;
