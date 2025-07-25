import astronaut from '@/assets/parallax/astronaut.png'
import astronaut2 from '@/assets/parallax/astronaut2.png'
import astronaut3 from '@/assets/parallax/astronaut3.png'
import rocket from '@/assets/parallax/layer-rocket.png'
import meteor from '@/assets/parallax/meteor.png'
import earth from '@/assets/orbits/Earth.png'
import moon from '@/assets/orbits/Moon.png'

const imgCoords = [
  {
    name: '우주인1',
    img: astronaut,
    className: 'w-32 top-[90vh] left-[90%] z-10 rotate-[-55deg]',
    speedX: -0.6, speedY: -0.3
  },
  {
    name: '우주인2',
    img: astronaut2,
    className: 'w-32 top-[80vh] left-[60%] z-10 rotate-[90deg]',
    speedX: -0.2, speedY: -1.5
  },
  {
    name: '우주인3',
    img: astronaut3,
    className: 'w-32 top-[40vh] left-[10%] z-10 rotate-[35deg]',
    speedX: -0.2, speedY: -0.8
  },
  {
    name: '로켓1',
    img: rocket,
    className: 'w-48 top-[40vh] left-[60%] z-8 rotate-[30deg]',
    speedX: 1.2, speedY: -0.8
  },
  {
    name: '로켓2',
    img: rocket,
    className: 'w-48 top-[120vh] left-[10%] z-8 rotate-[30deg]',
    speedX: 0.8, speedY: -0.6
  },
  {
    name: '달',
    img: moon,
    className: 'w-20 top-[40vh] left-[90%] z-5',
    speedX: -1.6, speedY: 1.6
  },
  {
    name: '지구',
    img: earth,
    className: 'w-60 top-[60vh] left-[90%] z-5',
    speedX: -1.2, speedY: 1.2
  },
  {
    name: '메테오1',
    img: meteor,
    className: 'w-120 top-[10vh] left-[40%] z-20 rotate-[-30deg]',
    speedX: -2.6, speedY: 1.4
  },
  {
    name: '메테오2',
    img: meteor,
    className: 'w-80 top-[10vh] left-[40%] z-20 rotate-[-30deg]',
    speedX: -2.4, speedY: 1.4
  },
  {
    name: '메테오3',
    img: meteor,
    className: 'w-60 top-[10vh] left-[40%] z-20 rotate-[-30deg]',
    speedX: -2.8, speedY: 1.6
  },
  {
    name: '메테오4',
    img: meteor,
    className: 'w-40 top-[-70vh] left-[83%] z-20 rotate-[-30deg] invert-25 hue-rotate-30',
    speedX: -2.8, speedY: 2
  },
  {
    name: '메테오5',
    img: meteor,
    className: 'w-100 top-[-70vh] left-[70%] z-20 rotate-[-40deg] invert-25 hue-rotate-30',
    speedX: -3.0, speedY: 1.7
  },
  {
    name: '메테오6',
    img: meteor,
    className: 'w-80 top-[-70vh] left-[85%] z-20 rotate-[-30deg] invert-25 hue-rotate-30',
    speedX: -2.8, speedY: 1.6
  },
]

export default imgCoords