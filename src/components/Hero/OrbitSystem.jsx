import { planetData, sunImage } from './planetData'

const OrbitSystem = () => {
  const baseOrbit = 350
  const gap = 70

  return (
    <div className="relative w-full h-screen flex justify-center items-center -z-1">
      {/* 태양 */}
      <div className="absolute w-[250px] h-[250px] sun-wave">
        <img src={sunImage} alt="Sun" className="w-full h-full" />
      </div>

      {/* 행성들 */}
      {planetData.map(planet => {
        const orbitSize = baseOrbit + gap * planet.orbitIndex
        return (
          <div
            key={planet.name}
            className={`
              absolute rounded-full border border-white/20
              aspect-square flex items-center justify-start
              orbit-${planet.orbitSpeed}
            `}
            style={{
              width: `${orbitSize}px`,
              height: `${orbitSize}px`,
              "--start-deg": `${planet.startDeg}deg`,
            }}
          >
            <img
              src={planet.img}
              alt={planet.name}
              width={planet.size * 5}
              height={planet.size * 5}
              style={{ transform: "translateX(-50%)" }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default OrbitSystem