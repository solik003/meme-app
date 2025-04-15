import connectMongoDB from '@/libs/mongodb';
import Meme from '@/models/Meme';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const updatedData = await req.json();

        await connectMongoDB();

        const updatedMeme = await Meme.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        });

        if (!updatedMeme) {
            return NextResponse.json({ message: 'Meme not found' }, { status: 404 });
        }

        return NextResponse.json(updatedMeme, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}