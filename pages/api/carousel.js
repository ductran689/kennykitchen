import { getCarousel } from '../../prisma/admin';

export default async function handle(req, res) {
  const pics = await getCarousel(req.query.id);

  return res.status(200).json(pics);
}
