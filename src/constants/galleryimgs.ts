import firstImg from '../assets/tattoos/1.jpg'
import secondImg from '../assets/tattoos/2.jpg'
import thirdImg from '../assets/tattoos/3.jpg'
import fourthImg from '../assets/tattoos/4.jpg'
import fifthImg from '../assets/tattoos/5.jpg'
import sixthImg from '../assets/tattoos/6.jpg'
import seventhImg from '../assets/tattoos/7.jpg'
import eighthImg from '../assets/tattoos/8.jpg'
import ninthImg from '../assets/tattoos/9.jpg'
import tenthImg from '../assets/tattoos/10.jpg'


export interface CardImg {
    id: number,
    thumb: string,
    fullRes: string,
    alt: string
}

export const GALLERY = [
  { id: 1,  thumb: firstImg,  fullRes: "https://picsum.photos/seed/1/1920/1080", alt: "Image 1" },
  { id: 2,  thumb: secondImg,  fullRes: "https://picsum.photos/seed/2/1080/1620", alt: "Image 2" },
  { id: 3,  thumb: thirdImg,  fullRes: "https://picsum.photos/seed/3/1920/1344", alt: "Image 3" },
  { id: 4,  thumb: fourthImg,  fullRes: "https://picsum.photos/seed/4/1344/1920", alt: "Image 4" },
  { id: 5,  thumb: fifthImg,  fullRes: "https://picsum.photos/seed/5/1920/1197", alt: "Image 5" },
  { id: 6,  thumb: sixthImg,  fullRes: "https://picsum.photos/seed/6/1197/1920", alt: "Image 6" },
  { id: 7,  thumb: seventhImg,  fullRes: "https://picsum.photos/seed/7/1920/1463", alt: "Image 7" },
  { id: 8,  thumb: eighthImg,  fullRes: "https://picsum.photos/seed/8/1280/1920", alt: "Image 8" },
  { id: 9,  thumb: ninthImg,  fullRes: "https://picsum.photos/seed/9/1920/1252", alt: "Image 9" },
  { id: 10, thumb: tenthImg, fullRes: "https://picsum.photos/seed/10/1200/1680", alt: "Image 10" },
]