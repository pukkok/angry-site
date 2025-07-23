import spaceVideo from '@/assets/space-video.mp4'
import OrbitSystem from "./OrbitSystem"
import PlanetSlide from './PlanetSlide'

const Inner = ({ref}) => {

  return (
    <div
      ref={ref}
      className={`sticky top-0 w-screen h-screen bg-black`}
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
          <article className='w-1/5 py-20 pl-10 flex flex-col justify-end items-start animate-pulse'>
            <h2 className='text-xl tracking-widest opacity-60'>NEXT:</h2>
            <h2 className='text-4xl font-bold'>Y → X</h2>
            <h2 className='text-4xl font-bold'>SCROLL SHIFT</h2>
            <p className="text-sm opacity-50 mt-2">지금부터 가로로 펼쳐집니다</p>
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