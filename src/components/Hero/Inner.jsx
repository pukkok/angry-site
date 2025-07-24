import spaceVideo from '@/assets/space-video.mp4'
import OrbitSystem from "./OrbitSystem"
import PlanetSlide from './PlanetSlide'
import NextDescription from '../NextDescription'

const Inner = ({ref}) => {

  return (
    <div
      ref={ref}
      className={`sticky top-0 w-screen h-screen bg-black overflow-hidden`}
    >
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover -z-1"
        src={spaceVideo} 
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='w-full h-full relative'>
        <div className='absolute w-full h-full flex'>
          <article className='w-1/5 py-20 pl-10 flex flex-col justify-end items-start'>
            <NextDescription 
              first={'Y → X'}
              second={'SCROLL SHIFT'}
              description={'지금부터 가로로 펼쳐집니다'}
            />
          </article>
          <article className='w-5/10'>
            <OrbitSystem />
          </article>
          <article className='w-4/10 h-full'>
            <PlanetSlide />
          </article>
        </div>
      </div>
    </div>
  )
}

export default Inner