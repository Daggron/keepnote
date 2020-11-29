const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DATABASEURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();

  const db = client.db('notes');

  return { db, client };
}

export default connect;