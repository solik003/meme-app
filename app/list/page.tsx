
'use client';

import MemeList from '@/components/MemeList';
import { useRouter } from 'next/navigation';


export default function ListPage() {
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

            <MemeList />
        </div>
    );
}