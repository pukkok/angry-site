import { useEffect, useRef, useState } from 'react'

const HorizonSection = () => {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !horizontalRef.current) return

      const containerTop = containerRef.current.getBoundingClientRect().top
      const containerHeight = containerRef.current.offsetHeight
      const scrollRange = containerHeight - window.innerHeight

      // clamp between 0 and 1
      const progress = Math.min(Math.max(-containerTop / scrollRange, 0), 1)

      // translateX 반영 (가로 길이에 따라 조정)
      const maxTranslate = horizontalRef.current.scrollWidth - window.innerWidth
      horizontalRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center border">
        <div
          ref={horizontalRef}
          className="flex gap-20 px-20 transition-transform duration-200 ease-out"
        >
          <div className="px-20 min-w-[100vw] h-[80vh] bg-red-400 flex items-center justify-center text-5xl text-white">슬라이드 1</div>
          <div className="px-20 min-w-[100vw] h-[80vh] bg-blue-400 flex items-center justify-center text-5xl text-white">슬라이드 2</div>
          <div className="px-20 min-w-[100vw] h-[80vh] bg-green-400 flex items-center justify-center text-5xl text-white">슬라이드 3</div>
        </div>
      </div>
    </section>
  )
}

export default HorizonSection
