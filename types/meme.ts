export interface Meme {
    id: number;
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
};