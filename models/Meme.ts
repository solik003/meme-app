import mongoose, { Document, Schema } from 'mongoose';

export interface IMeme extends Document {
    name: string;
    image: string;
    likes: number;
    link: string;
}

const MemeSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        likes: { type: Number, default: 0 },
        link: { type: String, required: true },
    }
);

export default mongoose.model<IMeme>('Meme', MemeSchema);
