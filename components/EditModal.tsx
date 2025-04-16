
import { Input, Button } from '@heroui/react';
import { EditModalProps, Meme } from '../types/meme';
import { useUpdateMeme } from '@/hooks/useUpdateMeme';
import { useForm } from 'react-hook-form';

export default function EditModal({ meme, onClose }: EditModalProps) {
    const { mutate: updateMeme, isPending } = useUpdateMeme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Meme>({
        defaultValues: {
            ...meme,
        },
    });

    const onSubmit = (data: Meme) => {
        updateMeme(data, {
            onSuccess: () => {
                alert('Meme updated!');
                onClose();
            },
            onError: (err: any) => {
                alert(`Error updating meme: ${err.message}`);
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-xl z-50"
            >
                <h2 className="text-lg sm:text-xl font-bold mb-4">Edit Meme</h2>

                <Input
                    label="ID"
                    isReadOnly
                    value={String(meme.id)}
                    className="mb-4 bg-gray-100 text-gray-500 cursor-not-allowed"
                />

                <div className="mb-4">
                    <Input
                        label="Name"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name must be at least 3 characters',
                            },
                            maxLength: {
                                value: 100,
                                message: 'Name must be under 100 characters',
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <Input
                        label="Image URL"
                        {...register('image', {
                            required: 'Image URL is required',
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:jpg|jpeg))$/i,
                                message: 'Image must be a valid JPG URL',
                            },
                        })}
                    />
                    {errors.image && (
                        <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <Input
                        label="Likes"
                        type="number"
                        {...register('likes', {
                            required: 'Likes are required',
                            min: {
                                value: 0,
                                message: 'Likes must be at least 0',
                            },
                            max: {
                                value: 99,
                                message: 'Likes must be less than 100',
                            },
                            valueAsNumber: true,
                        })}
                    />
                    {errors.likes && (
                        <p className="text-sm text-red-500 mt-1">{errors.likes.message}</p>
                    )}

                </div>

                <div className="flex justify-end space-x-2 pt-2">
                    <Button onPress={onClose} variant="ghost" disabled={isPending}>
                        Cancel
                    </Button>
                    <Button type="submit" isLoading={isPending}>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}
