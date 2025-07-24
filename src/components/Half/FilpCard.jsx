import constellationImg from '@/assets/zodiac.jpg'

const FlipCard = ({ flipped, prevX, prevY, name, koreanName, x = 0, y = 0 }) => (
  <div 
    className="perspective-[1200px] w-[352px] h-[516px]"
  >
    <div
      className={`relative w-full h-full z-100 transition-transform duration-700 transform-style-preserve-3d ${
        flipped ? 'rotate-y-180' : ''
      }`}
    >
      <article className="absolute inset-0 w-[352px] h-[515px] backface-hidden transform rotate-y-180">
        <div 
          className={`
            w-full h-full rounded-[64px] relative bg-transparent p-2 overflow-hidden
            
            before:content-[""]
            before:absolute before:-z-1
            before:w-[600px] before:h-[600px]
            before:top-1/2 before:left-[176px] before:p-4
            before:-translate-1/2
            before:bg-conic before:from-0% before:from-[#0ff] before:via-[#f0f] before:to-[#0ff]
            ani-spin
        `}>
          <div
            className="w-full h-full rounded-[56px] overflow-hidden"
            style={{
              backgroundImage: `url(${constellationImg})`,
              backgroundSize: '1600px auto',
              backgroundPosition: `-${prevX}px -${prevY}px`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </article>

      <article className="absolute inset-0 w-[352px] h-[515px] backface-hidden transform rotate-y-180">
        <div 
          className={`
            w-full h-full rounded-[64px] relative bg-transparent p-2 overflow-hidden
            
            before:content-[""]
            before:absolute before:-z-1
            before:w-[600px] before:h-[600px]
            before:top-1/2 before:left-[176px] before:p-4
            before:-translate-1/2
            before:bg-conic before:from-0% before:from-[#0ff] before:via-[#f0f] before:to-[#0ff]
            ani-spin
        `}>
          <div
            className="w-full h-full rounded-[56px] overflow-hidden"
            style={{
              backgroundImage: `url(${constellationImg})`,
              backgroundSize: '1600px auto',
              backgroundPosition: `-${x}px -${y}px`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </article>
    </div>
  </div>
)

export default FlipCard
