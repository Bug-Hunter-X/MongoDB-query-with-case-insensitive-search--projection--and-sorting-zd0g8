```javascript
const { MongoClient } = require('mongodb');

async function run() {
  const uri = "<connection_string>";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db("your_database").collection("your_collection");

    const query = { name: /John/i };
    const options = {
      projection: { _id: 0, name: 1 },
      sort: { age: -1 },
    };

    const result = await collection.find(query, options).toArray();
    if (result.length === 0){
        console.log("No documents found")
    }
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```