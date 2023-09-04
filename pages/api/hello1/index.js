import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/mongodb';
import Topic from '@/models/topic';
export default async function handler(req, res) {
  const { method } = req;
  console.log('method: ', method);

  switch (method) {
    case 'GET': {
      // Get data
      await connectMongoDB();
      const topics = await Topic.find();
      return NextResponse.json({ topics });
    }

    case 'POST': // Post data

    {
      connectMongoDB();
      const { title, description } = await req.json();
      await connectMongoDB();
      await Topic.create({ title, description });
      return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
