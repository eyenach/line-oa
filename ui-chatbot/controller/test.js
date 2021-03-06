const express = require('express')
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dev_ais");
    /*Return only the documents with the address "Park Lane 38":*/
    //   var query = { address: "Park Lane 38" };
    dbo.collection("chatmessage").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

module.exports = app