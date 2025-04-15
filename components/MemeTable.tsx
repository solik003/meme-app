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


export default function MemeTable({ onUpdate }: Props) {
    const { data: memes, isLoading, error } = useMemes();
    const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

    const handleUpdate = async (updated: Meme) => {
        try {
            const res = await fetch(`http://localhost:3000/api/memes/${updated.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            });

            if (!res.ok) throw new Error('Failed to update meme');

            if (onUpdate) onUpdate(updated);
            setSelectedMeme(null);
        } catch (err) {
            alert('Update failed');
        }
    };

    if (isLoading) return <p>Loading memes...</p>;
    if (error) return <p className="text-red-500">Error: {(error as Error).message}</p>;
    if (!memes) return null;

    return (
        <>
            <Table>
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Likes</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {memes?.map?.((meme) => (
                        <TableRow key={meme.id}>
                            <TableCell>{meme.id}</TableCell>
                            <TableCell>{meme.name}</TableCell>
                            <TableCell>{meme.likes}</TableCell>
                            <TableCell>
                                <Button onClick={() => setSelectedMeme(meme)}>Edit</Button>
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
        </>
    );
}
