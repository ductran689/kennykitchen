import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('kenny');
    const { id } = req.query;
    const { name, description } = req.body;

    const post = await db.collection('services').updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          name,
          description,
        },
      }
    );

    res.json(post);
    console.log('res', res);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
