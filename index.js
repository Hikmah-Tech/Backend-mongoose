const express = require("express");
const mongodb = require("mongodb");

const app = express();
const PORT = 3938;
// ** Parse data via request/response.
app.use(express.json());

// Connection to mongodb server
const connectionURL = "mongodb://localhost:27017";

// Instance of the connection
// The MongoClient class is a class that allows for making Connections to MongoDB
const client = new mongodb.MongoClient(connectionURL);

client
  .connect()
  .then(() => console.log("Connection to mongodb server was succcessful"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
