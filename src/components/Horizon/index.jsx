import { useEffect, useRef } from 'react'
import NextDescription from '../NextDescription'
import nebulaData from './nebulaData'

const HorizonSection = () => {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !horizontalRef.current) return

      const containerTop = containerRef.current.getBoundingClientRect().top
      const containerHeight = containerRef.current.offsetHeight
      const scrollRange = containerHeight - window.innerHeight

      const progress = Math.min(Math.max(-containerTop / scrollRange, 0), 1)
      const maxTranslate = horizontalRef.current.scrollWidth - window.innerWidth
      horizontalRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[1000vh] bg-gradient-to-br from-black to-blue-950">
      <div className="sticky top-0 h-screen flex items-center">
        <div
          ref={horizontalRef}
          className="flex gap-10 pl-20 pr-10 transition-transform duration-200 ease-out"
        >
          {nebulaData.map((nebula, idx) => (
            <div
              key={nebula.id}
              className="w-screen h-[80vh] flex items-center justify-center text-white relative overflow-hidden"
            >
              <img
                src={nebula.image}
                alt={nebula.name}
                className="inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-1/3 left-0 -translate-y-1/2 z-10 max-w-[600px] p-10 bg-black/30 backdrop-blur rounded-xl">
                <div className="text-4xl mb-2">{nebula.name}</div>
                <div className="text-xl opacity-80">{nebula.short}</div>
                <p className="text-sm opacity-60 mt-2">{nebula.description}</p>
              </div>

              {nebulaData.length - 1 === idx && (
                <article className="absolute right-0 bottom-0 p-10 items-end text-right bg-black/60 rounded-tl-xl">
                  <NextDescription 
                    first={'REACTIVE'}
                    second={'HALF SECTION'}
                    description={'스크롤에 따라 반응하는 좌우 분할 레이아웃'}
                  />
                </article>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HorizonSection
