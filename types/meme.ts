export interface Meme {
    id: string;
    name: string;
    image: string;
    likes: number;
    link: string;
}
export interface EditModalProps {
    meme: Meme;
    onClose: () => void;
    onSave: (updated: Meme) => void;
}
export interface MemeCardProps {
    meme: Meme;
    onClick: () => void;
}
export type Props = {
    onUpdate?: (meme: Meme) => void;
}