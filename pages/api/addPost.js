import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('kenny');
    const { cover, name, key, slug, image, subServices, description } =
      req.body;

    const post = await db.collection('services').insertOne({
      cover,
      name,
      key,
      slug,
      image,
      subServices,
      description,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
