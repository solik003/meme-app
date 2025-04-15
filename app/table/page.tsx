'use client';

import { JSX } from 'react';
import MemeTable from '@/components/MemeTable';
import { useRouter } from 'next/navigation';

export default function TablePage(): JSX.Element {
    const router = useRouter();

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
            <MemeTable />
        </div>
    );
}
