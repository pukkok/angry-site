import { useEffect, useRef, useState } from 'react'

const TestSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target)
          if (index !== -1) {
            setActiveIndex(index)
          }
        }
      })
    }, options)

    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto w-3/4 text-white flex gap-8">
        {/* 왼쪽 영역 */}
        <div className="flex-1 flex flex-col space-y-40">
          <div ref={sectionRefs[0]} className="h-screen bg-amber-300 text-black text-3xl flex items-center justify-center">왼쪽 파트 1</div>
          <div ref={sectionRefs[1]} className="h-screen bg-emerald-400 text-black text-3xl flex items-center justify-center">왼쪽 파트 2</div>
          <div ref={sectionRefs[2]} className="h-screen bg-fuchsia-500 text-black text-3xl flex items-center justify-center">왼쪽 파트 3</div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="flex-1 relative">
          <div className="sticky top-0 h-screen flex items-center justify-center text-5xl font-bold">
            {activeIndex === 0 && <p className="text-white">안녕하세요</p>}
            {activeIndex === 1 && <p className="text-white">반갑습니다</p>}
            {activeIndex === 2 && <p className="text-white">우주로 갑시다</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestSection