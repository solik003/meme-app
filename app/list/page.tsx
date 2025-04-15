'use client';

import React from 'react';
import MemeCard from '@/components/MemeCard';
import { Meme } from '@/types/meme';
import { useRouter } from 'next/navigation';

export default function MemeList() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="p-4">
            <button
                onClick={handleBack}
                className="text-sm text-blue-600 hover:underline mb-4"
            >
                &larr; Back
            </button>
            <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

            </div>
        </div>
    );
}