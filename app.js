"use strict";

var mongo = require("mongodb"),
    fs = require("fs"),         // to read static files
    io = require("socket.io"),  // socket io server
    http = require("http");

var mongodbUri = "mongodb://127.0.0.1/chat";

var app = http.createServer(handler);
io = io.listen(app);
app.listen(3000);
console.log("http server on port 3000");


function handler(req, res){
  fs.readFile(__dirname + "/index.html",
  function (err, data) {
    res.writeHead(200);
    res.end(data);
  });
}


mongo.MongoClient.connect (mongodbUri, function (err, db) {

  db.collection('messages', function(err, collection) {

    // open socket
    io.sockets.on("connection", function (socket) {


      socket.on("changeChannel", function (channel) {
        console.log( "Changing Channel to "+ channel +"for socket "+ socket.id );
        if (channel == "all") { channel = undefined; }
        socket.channel = channel;
      });


      // open a tailable cursor
      console.log("== open tailable cursor for socket "+ socket.id);
      collection.find({}, {tailable:true, awaitdata:true, numberOfRetries:-1}).sort({ $natural: 1 }).each(function(err, doc) {

        if (doc.type != undefined && doc.type == 'message') {

          if ( socket.channel == undefined ) {
            socket.emit("message",doc);
          } else if (doc.channel == socket.channel) {
            socket.emit("message",doc);
          }

        }


      });





    });

  });

});
