// Here I show U how to connect your node application to you MongoDB database
// (1) install the mongodb driver
//     => npm install mongodb

const { MongoClient } = require("mongodb");

// this is the connection string we get from the Atlas
const uri = "mongodb+srv://admin:admin@cluster0.6h8buh7.mongodb.net/?retryWrites=true&w=majority";

// create a client to access the basic functionalities of the MongoDB
const client = new MongoClient(uri);

async function run() {
    try {
        // get the database
      const database = client.db("sample_mflix");
      const comments = database.collection('comments');
      // Query for a commnet that has the name 'Taylor Scott'
      const query = { name: 'Taylor Scott' };
      const comment = await comments.findOne(query);
      console.log(comment);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);