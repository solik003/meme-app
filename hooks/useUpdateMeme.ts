
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Meme } from '@/types/meme';

export const useUpdateMeme = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updated: Meme) => {
            const res = await fetch(`/api/memes/${updated.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            });

            if (!res.ok) throw new Error('Failed to update meme');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['memes'] });
        },
    });
};
