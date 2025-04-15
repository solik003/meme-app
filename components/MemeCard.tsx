import { Card, Image } from '@heroui/react';
import { FC } from 'react';
import { Meme, MemeCardProps } from '../types/meme';

const MemeCard: FC<MemeCardProps> = ({ meme }) => {
    return (
        <Card
            className="border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl max-w-[300px]"
        >
            <Image
                src={meme.image}
                alt={meme.name}
                className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{meme.name}</h3>
                <p className="text-sm text-gray-600">👍 {meme.likes}</p>
                <a
                    href={meme.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 hover:underline text-sm"
                >
                    View Image
                </a>
            </div>
        </Card>
    );
};

export default MemeCard;

