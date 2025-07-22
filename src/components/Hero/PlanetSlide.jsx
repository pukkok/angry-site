import React, { useEffect, useRef, useState } from "react"
import { planetData } from "./planetData"

const PlanetCanvasSlide = () => {
  const canvasRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(true)

  const angleRef = useRef(0)              // 현재 회전 각도
  const lastStepRef = useRef(0)           // 이전 위치 각도
  const targetAngleRef = useRef(0)        // 다음 회전 목표 각도

  const imagesRef = useRef([])            // 이미지 객체 캐싱

  const len = planetData.length
  const rotationStep = 360 / len

  const canvasSize = innerHeight
  const radius = 720
  const planetSize = 360
  const centerX = innerWidth / 2 + planetSize / 2 + 100
  const centerY = canvasSize / 2

  const duration = 2000                   // 2초 회전
  const pause = 1000                      // 1초 정지

  // 이미지 미리 로딩
  useEffect(() => {
    planetData.forEach((planet, i) => {
      const img = new Image()
      img.src = planet.img
      img.onload = () => {
        imagesRef.current[i] = img
      }
    })
  }, [])

  // 애니메이션
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    let animationFrameId
    let startTime = null

    const draw = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      ctx.clearRect(0, 0, canvasSize, canvasSize)

      // 회전 중일 때만 각도 갱신
      if (isRotating) {
        const delta = targetAngleRef.current - lastStepRef.current
        angleRef.current = lastStepRef.current + delta * progress
      }

      // 행성 그리기
      for (let i = 0; i < len; i++) {
        const img = imagesRef.current[i]
        if (!img) continue

        let deg = rotationStep * i - angleRef.current + 180
        const rad = (deg * Math.PI) / 180
        const x = centerX + radius * Math.cos(rad) - planetSize / 2
        const y = centerY + radius * Math.sin(rad) - planetSize / 2

        ctx.drawImage(img, x, y, planetSize, planetSize)
      }

      // 현재 행성 인덱스 갱신

      const normalized = ((angleRef.current + 360) % 360)
      const idx = Math.round((normalized / 360) * len) % len
      setCurrentIndex(idx)

      // 회전 끝났으면 다음 회전 대기
      if (isRotating && progress >= 1) {
        setIsRotating(false)
        lastStepRef.current = targetAngleRef.current

        setTimeout(() => {
          targetAngleRef.current = lastStepRef.current + rotationStep
          startTime = null
          setIsRotating(true)
          requestAnimationFrame(draw)
        }, pause)
        return
      }

      if (isRotating) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    // 초기값 설정
    targetAngleRef.current = rotationStep
    requestAnimationFrame(draw)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="absolute top-0"
      />
      <div className="text-white max-w-xs flex flex-col h-full justify-center pb-40">
        <h2 className="text-6xl font-bold">{planetData[currentIndex].name}</h2>
        <p className="opacity-70 mt-4">{planetData[currentIndex].description}</p>
      </div>
    </>
  )
}

export default PlanetCanvasSlide
