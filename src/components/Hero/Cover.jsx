import spaceLoop from '@/assets/space-loop.mp4'

const Cover = ({ref}) => {

  return (
    <div 
      ref={ref}
      className="fixed top-0 w-full h-screen"
      >
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover -z-1"
          src={spaceLoop} 
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="flex justify-center items-center h-full"> 
          <article className="w-7/10 p-20 text-white z-10">
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-sky-400 to-purple-600 drop-shadow-[0_0_10px_rgba(180,180,255,0.6)]">
              스크롤 여행, 우주의 세계로
            </h1>
            <p className="text-lg mt-4 opacity-80">
              아래로 스크롤하여 더 깊은 우주를 탐험하세요.
            </p>
          </article>

          <article className={`
            w-30 h-screen relative overflow-hidden
            after:content-[""]
            after:absolute
            after:w-full
            after:bottom-0
            after:h-1/3
            after:bg-linear-to-t 
            after:from-white/60
            after:via-white/10
            after:to-transparent
            after:pointer-events-none
            after:backdrop-blur-[6px]
            after:z-10
          `}>
            <div className="flex items-center vertical-mode text-9xl scroll-up">
              <p className="h-screen px-10">SCROLL SPACE</p>
              <p className="h-screen px-10">SCROLL SPACE</p>
            </div>
          </article>

          <article className="flex-1 h-full text-white">
            <div className='text-center mx-auto text-4xl'>
              <div className='absolute top-[calc(50%-320px)] right-[5%] animate-pulse text-right'>
                <h2 className='text-xl tracking-widest opacity-60'>NEXT:</h2>
                <h2 className='text-4xl font-bold'>CLIP-PATH</h2>
                <h2 className='text-4xl font-bold'>WITH SCROLL</h2>
                <p className="text-sm opacity-50 mt-2">스크롤로 우주를 해방하세요</p>
              </div>
            </div>
          </article>
        </div>
    </div>
  )
}

export default Cover