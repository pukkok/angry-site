import { useEffect, useRef, useState } from 'react'
import constellationData from './constellationData'
import FlipCard from './FilpCard'
import NextDescription from '../NextDescription'

const HalfSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
  const handleScroll = () => {
    sectionRefs.current.forEach((ref, i) => {
      if (!ref) return
      const rect = ref.getBoundingClientRect()
      const isHalfVisible = rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.5
      if (isHalfVisible) {
        setActiveIndex(i)
      }
    })
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll() // 초기화
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <section className="w-full bg-black text-white flex px-20">
      <div className='w-2/3'>
        {constellationData.map((c, i) => (
          <div
            key={c.id}
            data-index={i}
            ref={el => (sectionRefs.current[i] = el)}
            className={`h-[120vh] flex items-start flex-row gap-2 sticky top-0 
              bg-black
              pt-[25%]`}
          >
            <article className='w-full flex justify-between relative'>
              <div className="w-2/3 max-w-[500px]">
              <h2 className="text-4xl font-bold text-emerald-400">{c.koreanName}</h2>
              <p className="text-lg mt-2 text-white/80">{c.summary}</p>
              <p className="mt-4 text-sm text-emerald-300">
                {c.season} | {c.months.join('월, ')}월
              </p>
              </div>

              <div className="w-1/3 flex justify-start">
                <div className="w-48 h-48 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                  <span className="text-2xl text-emerald-300">{c.name}</span>
                </div>
              </div>
            </article>

            {constellationData.length - 1 === i && (
              <div className='absolute bottom-15'>
                <NextDescription 
                  first={'다음 액션'}
                  second={'들어갈 부분'}
                  description={'다음으로 넘어가 봅시다'}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='w-1/3 flex flex-col items-center'>
        {constellationData.map((c, i) => {
          return (
            <div className={`text-white flex items-center sticky top-1/7 pb-[80%]`} key={i}>
              <FlipCard 
                prevX={constellationData[i > 1 ? i - 1 : 0].x}
                prevY={constellationData[i > 1 ? i - 1 : 0].y}
                flipped={activeIndex === i} name={c.name} koreanName={c.koreanName} summary={c.summary} x={c.x} y={c.y}
              />
            </div>
            )
          })}
      </div>
    </section>
  )
}

export default HalfSection