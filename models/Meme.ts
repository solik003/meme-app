import mongoose, { Document, Schema, Types, models } from 'mongoose';

export interface IMeme extends Document {  
    name: string;
    image: string;
    likes: number;
    link: string;
}

const MemeSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minlength: [3, 'Name must be at least 3 characters'],
            maxlength: [100, 'Name must be at most 100 characters'],
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
            validate: {
                validator: function (value: string) {
                    return /^https?:\/\/.+\.(jpg|jpeg)$/i.test(value);
                },
                message: 'Image must be a valid JPG URL',
            },
        },
        likes: {
            type: Number,
            required: true,
            min: [0, 'Likes must be at least 0'],
            max: [99, 'Likes cannot exceed 99'],
            default: 0,
        },
        link: {
            type: String,
            required: [true, 'Link is required'],
            validate: {
                validator: function (value: string) {
                    return /^https?:\/\/.+/i.test(value);
                },
                message: 'Link must be a valid URL',
            },
        },
    }
);

const Meme = models.Meme || mongoose.model<IMeme>('Meme', MemeSchema);

export default Meme;
