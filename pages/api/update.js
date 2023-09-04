// pages/api/update.js
import dbConnect from '../../lib/dbConnect';
import Note from '../../utils/Note';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { content } = req.body;

  try {
    await dbConnect();
    const note = await Note.findOneAndUpdate(
      {},
      { content },
      { new: true, upsert: true }
    );
    return res.status(200).json({ message: 'Note updated successfully', note });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
