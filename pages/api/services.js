import { getAllPics } from '../../prisma/admin';

export default async function handle(req, res) {
  const pics = await getAllPics(req.query.id);
  console.log('getuser');
  return res.status(200).json(pics);
}
