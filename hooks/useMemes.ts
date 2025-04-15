
import { useQuery } from '@tanstack/react-query';
import { Meme } from '@/types/meme';

const fetchMemes = async (): Promise<Meme[]> => {
    const res = await fetch('http://localhost:3000/api/memes');
    if (!res.ok) throw new Error('Failed to fetch memes');
    return res.json();
};

export const useMemes = () => {
    return useQuery<Meme[]>({
        queryKey: ['memes'],
        queryFn: fetchMemes,
    });
};
