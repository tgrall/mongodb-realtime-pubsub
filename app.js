"use strict";

var mongo = require("mongodb");

var mongodbUri = "mongodb://127.0.0.1/chat";

mongo.MongoClient.connect (mongodbUri, function (err, db) {

  db.collection('messages', function(err, collection) {
    // open a tailable cursor
    console.log("== open tailable cursor");
    collection.find({}, {tailable:true, awaitdata:true, numberOfRetries:-1}).sort({ $natural: 1 }).each(function(err, doc) {
      console.log(doc);
    })
  });

});
