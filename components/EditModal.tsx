import { Modal, Input, Button } from '@heroui/react';
import { EditModalProps, Meme } from '../types/meme';
import { useState } from 'react';

export default function EditModal({ meme, onClose, onSave }: EditModalProps) {
    const [name, setName] = useState(meme.name);
    const [image, setImage] = useState(meme.image);
    const [likes, setLikes] = useState(meme.likes);

    const isValidUrl = (url: string) =>
        /^(https?:\/\/.*\.(?:jpg|jpeg))$/i.test(url);

    const handleSave = () => {
        if (name.length < 3 || name.length > 100) return alert('Name must be 3-100 characters.');
        if (!isValidUrl(image)) return alert('Image must be a valid JPG URL.');
        if (likes < 0 || likes > 99) return alert('Likes must be between 0 and 99.');

        onSave({
            ...meme,
            name,
            image,
            likes,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl z-50">
                <h2 className="text-xl font-bold mb-4">Edit Meme</h2>
                <Input label="ID" value={String(meme.id)} isReadOnly className="mb-4" />
                <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4" />
                <Input label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="mb-4" />
                <Input
                    label="Likes"
                    type="number"
                    min={0}
                    max={99}
                    value={likes}
                    onChange={(e) => setLikes(Number(e.target.value))}
                    className="mb-4"
                />
                <div className="flex justify-end space-x-2">
                    <Button onPress={onClose} variant="ghost">Cancel</Button>
                    <Button onPress={handleSave}>Save</Button>
                </div>
            </div>
        </div>
    );
}
