import { useEffect, useRef, useState } from 'react'
import constellationData from './constellationData'
import FlipCard from './FilpCard'

const HalfSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="w-full bg-black text-white">
      {constellationData.map((c, i) => (
        <div
          key={c.id}
          data-index={i}
          ref={el => (sectionRefs.current[i] = el)}
          className="h-screen flex flex-row items-center justify-between px-16 gap-8 border-b border-white/10"
        >
          {/* LEFT: 설명 영역 */}
          <div className="w-1/3">
            <h2 className="text-3xl font-bold text-emerald-400">{c.koreanName}</h2>
            <p className="text-lg mt-2 text-white/80">{c.summary}</p>
            <p className="mt-4 text-sm text-emerald-300">
              {c.season} | {c.months.join('월, ')}월
            </p>
          </div>

          {/* CENTER: 마크 영역 */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-2 border-emerald-400 flex items-center justify-center">
              <span className="text-2xl text-emerald-300">{c.name}</span>
            </div>
          </div>

          {/* RIGHT: 카드 영역 */}
          <div className="w-1/3 flex justify-start">
            <FlipCard flipped={activeIndex === i} name={c.name} koreanName={c.koreanName} summary={c.summary} x={c.x} y={c.y}/>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HalfSection