'use client';

import { JSX, useEffect, useState } from 'react';
import MemeTable from '@/components/MemeTable';
import { useRouter } from 'next/navigation';

type Meme = {
    id: number;
    name: string;
    image: string;
    likes: number;
};

export default function TablePage(): JSX.Element {
    const [memes, setMemes] = useState<Meme[]>([]);
    const router = useRouter();

    const updateMeme = (updated: Meme) => {
        const updatedMemes = memes.map((m) => (m.id === updated.id ? updated : m));
        setMemes(updatedMemes);
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="p-5">
            <button
                onClick={handleBack}
                className="text-sm text-blue-600 hover:underline mb-4"
            >
                &larr; Back
            </button>
            <h2 className="text-2xl font-semibold mb-4">Meme Table</h2>
            <MemeTable memes={memes} onUpdate={updateMeme} />
        </div>
    );
}

