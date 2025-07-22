import spaceVideo from '@/assets/space-video.mp4'
import OrbitSystem from "./OrbitSystem"
import PlanetSlide from './PlanetSlide'

const Inner = ({ref}) => {

  return (
    <div
      ref={ref}
      className={`sticky top-0 w-screen h-screen bg-gradient-to-b from-black to-blue-900`}
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
          <article className='w-1/5 p-20 flex flex-col justify-end items-start animate-pulse'>
            <h2 className='text-xl tracking-widest opacity-60'>NEXT:</h2>
            <h2 className='text-4xl font-bold'>HORIZON</h2>
            <h2 className='text-4xl font-bold'>TO SCROLL</h2>
            <p className="text-sm opacity-50 mt-2">스크롤로 우주를 해방하세요</p>
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