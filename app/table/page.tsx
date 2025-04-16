'use client';

import { JSX } from 'react';
import MemeTable from '@/components/MemeTable';

export default function TablePage(): JSX.Element {
    return (
        <div className="p-5">
            <MemeTable />
        </div>
    );
}
