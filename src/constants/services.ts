import tattooImg from '../assets/tattoos.jpg';
import piercingImg from '../assets/piercing.jpg'

export interface Service {
    name: string;
    id: number;
    description: string;
    img: string;
}

export const SERVICES = [
    {
        name: 'TATTOO',
        id: 1,
        description: 'homepage.tattoo',
        img: tattooImg
    },
    {
        name: 'PIERCINGS',
        id: 2,
        description: 'homepage.piercings',
        img: piercingImg,
    },
    {
        name: 'TATTOO REMOVAL',
        id: 3,
        description: 'homepage.art',
        img: 'https://placehold.co/1920x300',
    }
]