# Realtime Application with MongoDB and Socket.io


This application shows how to use MongoDB to create a pub/sub based application.

It uses :

 * MongoDB Capped Collections and Tailable Cursors
 * node.js


## Step 1 : Capped Collection and Tailable Cursors with node.js

*See branch step-01*

Installation:

1- Create a new database

  `` use chat ``  



2- Create a Capped Collection

`` db.createCollection('messages', { capped: true, size: 100000 }); ``



3- Insert a dummy document


`` db.messages.insert({"type":"init"});``


4- Install node modules

`` npm install``


5- Start application

`` node app``

6- Insert new documents in the collection

`` db.messages.insert({"type":"message", "text":"New message"});``

You can see that message is capture by the node application


## Step 2 : Adding User Interface with Socket.io

*See branch step-02*

In this step, the application has been improved to send message to an HTML client using [socket.io](http://socket.io).

Once you hace checked out the step-02 branch and updated the dependencies `npm install` :

1- Start the application

`` node app``

2- Open your browser and go to:

[http://localhost:3000](http://localhost:3000)

3- Insert new messages in the collection

`` db.messages.insert({"type":"message", "text":"New message pushed in web client"});``


 