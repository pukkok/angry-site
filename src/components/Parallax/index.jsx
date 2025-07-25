'use client'

import { useEffect, useRef, useState } from 'react'

import bg from '@/assets/parallax/dark-space.png'
import imgCoords from './imgCoords'

const ParallaxSection = () => {
  const sectionRef = useRef(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    console.log(sectionRef.current.offsetTop, window.scrollY)

    const handleScroll = () => setOffsetY(window.scrollY - sectionRef.current.offsetTop)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="w-full h-[300vh] relative top-0 bg-white">
      {/* 배경 */}
      <img
        src={bg}
        className='sticky w-full h-screen top-0 left-0 z-1'
        alt='배경'
      />
      <div className='w-full h-full absolute top-0 overflow-hidden'>
        {imgCoords.map(item => {
          return <img
            key={item.name}
            src={item.img} className={`absolute ${item.className}`}
            style={{ transform: `translateX(${offsetY * item.speedX}px) translateY(${offsetY * item.speedY}px)`}}
            alt={item.name}
          />
        })}
      </div>
      <div className='absolute bottom-0 w-full h-screen mix-blend-multiply bg-[#888] text-white z-10 flex items-center justify-center'>
        <h1 className='text-[280px] font-bold'>FINISH</h1>
      </div>

    </section>
  )
}

export default ParallaxSection
