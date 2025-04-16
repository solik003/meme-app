'use client';

import { useState } from 'react';
import MemeCard from './MemeCard';
import { useMemes } from '@/hooks/useMemes';

export default function MemeList() {
    const { data: memes, isLoading, error } = useMemes();
    const [selectedMeme, setSelectedMeme] = useState<string>();

    if (isLoading) return <p>Loading memes...</p>;
    if (error) return <p className="text-red-500">Error: {(error as Error).message}</p>;

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {memes?.map((meme) => (
                    <MemeCard
                        key={meme.id}
                        meme={meme}
                        onClick={() => setSelectedMeme(meme.id)}
                    />
                ))}
            </div>
        </div>
    );
}
