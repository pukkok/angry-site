import { useRef, useEffect } from 'react'

const TextFilm = ({ texts = ['기본 텍스트'], direction = 1, tilt = 3, selectType="a" }) => {
  const countRef = useRef(0)
  const targetRef = useRef(null)

  const bgType = {
    a: 'bg-gradient-to-r from-purple-900 via-indigo-900 to-black',
    b: 'bg-gradient-to-r from-rose-900 via-pink-800 to-black',
    c: 'bg-gradient-to-r from-sky-800 via-blue-900 to-black',
    d: 'bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950',
    e: 'bg-gradient-to-r from-yellow-400 via-amber-600 to-purple-900',
    f: 'bg-gradient-to-r from-teal-400 via-cyan-700 to-indigo-900'
  }

  useEffect(() => {
    const animate = () => {
      countRef.current += 0.5
      if(countRef.current > targetRef.current.scrollWidth / 2) countRef.current = 0
      targetRef.current.style.transform = `translateX(${countRef.current * direction}px)` // right
      requestAnimationFrame(animate)
    }
    animate()

    const handleScroll = () => {
      countRef.current += 15
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const innerText = [...texts, ...texts].map(text => `${text}\u00A0\u00A0\u00A0\u00A0`).join('')

  return (
    <div 
      className={`w-screen mt-40 flex text-white flex-nowrap ${bgType[selectType]}`}
      style={{rotate : `${tilt}deg`, justifyContent: direction > 0 ? 'flex-end' : 'flex-start'}}
    >
      <p 
        ref={targetRef}
        className='flex shrink-0 px-12 py-10 text-3xl'
      >{innerText}</p>
    </div>
  )
}

export default TextFilm
