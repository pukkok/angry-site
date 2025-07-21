import { useEffect, useRef } from "react"
import Ball from "./Ball"
import Cover from "./Cover"

const HeroSection = () => {
  const sectionRef = useRef(null)
  const coverRef = useRef(null)
  const maskRef = useRef(null)
  const animationFrame = useRef(null)

  useEffect(() => {
    const clamp = (val, min, max) => Math.max(min, Math.min(val, max))
    const minRadius = 150
    if(maskRef.current) {
      maskRef.current.style.clipPath = `circle(${minRadius}px at left 20% top 50%)`
    }

    const onScroll = () => {
      if (animationFrame.current) return

      animationFrame.current = requestAnimationFrame(() => {
        const section = sectionRef.current
        const mask = maskRef.current
        if (!section || !mask) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        const progress = clamp((scrollY - sectionTop) / (sectionHeight- innerHeight), 0, 1)

        const maxRadius = innerWidth
        const radius = minRadius + (maxRadius - minRadius) * progress

        if(progress > 0.5) {
          coverRef.current.style.position = 'absolute'
          coverRef.current.style.marginTop = '-100vh'
        } else {
          coverRef.current.style.position = 'fixed'
          coverRef.current.style.marginTop = 0
        }

        mask.style.clipPath = `circle(${radius}px at left 20% top 50%)`

        animationFrame.current = null
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animationFrame.current)
    }
  }, [])

  return (
    <div className="relative">
      <section ref={sectionRef} className="w-full h-[200vh] relative top-0 bg-black text-white">
        <Cover ref={coverRef}/>
        <div
          ref={maskRef}
          className={`sticky top-0 w-screen h-screen bg-red-200`}
        >
          <div>
            클립패스 안에서 꾸밀 부분
          </div>
          <Ball />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
