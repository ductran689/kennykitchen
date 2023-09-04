import { MongoClient, ObjectId } from 'mongodb';
async function handler(req, res) {
  if (req.method !== 'GET') return;

  var query = { _id: new ObjectId(req.query.param[0].toString()) };
  const options = { upsert: true };
  const updateTodo = {
    $set: { done: req.query.param[1] },
  };
  const client = await clientPromise;
  const db = client.db('kenny');
  const collection = db.collection('services');
  const result = await collection.updateOne(query, updateTodo, options);

  console.log('updated record::::' + result);
  return res.json({
    todo: result,
    message: 'To do updated!',
  });
}
export default handler;
