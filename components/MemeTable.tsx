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
import { useState, useEffect } from 'react';
import EditModal from './EditModal';
import { Meme } from '../types/meme';

export default function MemeTable() {
    const [memes, setMemes] = useState<Meme[]>([]);
    const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMemes = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('http://localhost:3000/api/memes');
            if (!res.ok) throw new Error('Failed to fetch memes');
            const data = await res.json();
            setMemes(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Something went wrong';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    const updateMeme = async (updated: Meme) => {
        setError(null);
        try {
            const res = await fetch(`http://localhost:3000/api/memes/${updated.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            });

            if (!res.ok) throw new Error('Failed to update meme');

            const updatedMemes = memes.map((m) =>
                m.id === updated.id ? updated : m
            );
            setMemes(updatedMemes);
            setSelectedMeme(null);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Something went wrong';
            setError(message);
        }
    };


    useEffect(() => {
        fetchMemes();
    }, []);

    if (loading) return <p>Loading memes...</p>;

    return (
        <>
            {error && <p className="text-red-500">{error}</p>}

            <Table>
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Likes</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {memes.map((meme) => (
                        <TableRow key={meme.id}>
                            <TableCell>{meme.id}</TableCell>
                            <TableCell>{meme.name}</TableCell>
                            <TableCell>{meme.likes}</TableCell>
                            <TableCell>
                                <Button onClick={() => setSelectedMeme(meme)}>
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {selectedMeme && (
                <EditModal
                    meme={selectedMeme}
                    onClose={() => setSelectedMeme(null)}
                    onSave={updateMeme}
                />
            )}
        </>
    );
}
