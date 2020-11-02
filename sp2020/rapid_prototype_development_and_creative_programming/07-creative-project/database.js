
// TODO: if don't need, REMOVE!!!!

const { MongoClient } = require("mongodb");
// const http = require('http');

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://CreativeProjectUser:ConnectToCreativeProject@330creativeproject-4eeyr.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

// The database to use
const dbName = "330CreativeProjectDb";
                      

// learned from https://zellwk.com/blog/crud-express-mongodb/

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(async client => {
    console.log('Connected to Database')
    const db = client.db(dbName);
    // const myDoc = await db.collection("users").findOne();
    // console.log(myDoc);
  })
  .catch(error => console.error(error))

 