# Realtime Application with MongoDB and Socket.io


This application shows how to use MongoDB to create a pub/sub based application.

It uses :

 * MongoDB Capped Collections and Tailable Cursors
 * node.js
 
 
## Step 1 : Capped Collection and Tailable Cursors with node.js

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

`` db.messages.insert({"type":"message", "value":"New message"});``

You can see that message is capture by the node application



