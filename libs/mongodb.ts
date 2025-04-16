
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || '';

if (!MONGO_URL) {
    throw new Error('Please define the MONGO_URL environment variable');
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectMongoDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGO_URL, {
                dbName: 'memesDB',
                bufferCommands: false,
            })
            .then((mongoose) => {
                console.log('Connected to MongoDB');
                return mongoose;
            })
            .catch((err) => {
                console.error('MongoDB connection error:', err);
                throw err;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
