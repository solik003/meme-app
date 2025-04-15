
import {connectMongoDB} from '@/libs/mongodb';
import Meme from '@/models/Meme';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const memes = await Meme.find().skip(0).limit(10);
  return NextResponse.json(memes);
}

export async function POST(req: Request) {
  const data = await req.json();
  await connectMongoDB();
  const newMeme = await Meme.create(data);
  return NextResponse.json(newMeme, { status: 201 });
}
