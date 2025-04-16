'use client';

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from '@heroui/react';
import { Meme, Props } from '../types/meme';
import EditModal from './EditModal';
import { useState } from 'react';
import { useMemes } from '@/hooks/useMemes';
import { useUpdateMeme } from '@/hooks/useUpdateMeme';


export default function MemeTable({ onUpdate }: Props) {
    const { data: memes, isLoading, error } = useMemes();
    const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

    const { mutate: updateMeme, isPending } = useUpdateMeme();

    const handleUpdate = (updated: Meme) => {
        updateMeme(updated, {
            onSuccess: () => {
                if (onUpdate) onUpdate(updated);
                setSelectedMeme(null);
            },
            onError: () => {
                alert('Update failed');
            },
        });
    };

    if (isLoading) return <p>Loading memes...</p>;
    if (error) return <p className="text-red-500">Error: {(error as Error).message}</p>;
    if (!memes) return null;

    return (
        <>
            <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-xl border border-gray-200 shadow-sm">
                <Table isStriped
                    removeWrapper
                    className="rounded-xl">
                    <TableHeader>
                        <TableColumn className="sticky top-0 z-10 bg-white text-gray-700 text-left px-6 py-4">Name</TableColumn>
                        <TableColumn className="sticky top-0 z-10 bg-white text-gray-700 text-center px-6 py-4">Likes</TableColumn>
                        <TableColumn className="sticky top-0 z-10 bg-white text-gray-700 text-right px-6 py-4">Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {memes?.map?.((meme) => (
                            <TableRow key={meme.id} className="hover:bg-blue-50 transition duration-200">
                                <TableCell className="font-medium text-gray-800 px-6 py-4">{meme.name}</TableCell>
                                <TableCell className="text-center text-gray-800 px-6 py-4 font-semibold">{meme.likes}</TableCell>
                                <TableCell className="text-right">
                                    <Button onPress={() => setSelectedMeme(meme)} className="text-gray-800 transition duration-200">Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {selectedMeme && (
                    <EditModal
                        meme={selectedMeme}
                        onClose={() => setSelectedMeme(null)}
                        onSave={handleUpdate}
                    />
                )}
            </div>
        </>
    );
}
