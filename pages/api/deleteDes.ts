import { MongoClient, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

async function handler(req: any, resp: any) {
  const { todoId } = req.query;
  if (req.method !== 'DELETE') return;

  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('ken');
  const result = await (
    await collection.deleteOne({ _id: new ObjectId(todoId) })
  ).deletedCount;
  client.close();
  console.log('deleted count::::' + result);
  return resp.json({
    todo: result,
    message: 'To do deleted',
  });
}
export default handler;
