import style from '@/styles/blue-wave.module.css'

const Ball = ({index, title="제목"}) => {

  const stringIndex = (index) => {
    if(typeof index !== 'number') return '01'
    if(index < 9) return `0${index+1}`
    return index
  }

  return (
    <div className={`
      w-[300px] h-[300px] bg-emerald-400 rounded-full
      border border-emerald-500
      relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      flex flex-col justify-center items-center text-white
      ${style['blue-wave']}
      `}>
      <p className="text-sm mb-4">{stringIndex(index)}</p>
      <h2 className="text-3xl mb-1">{title}</h2>
      <p className="flex gap-1 items-center mb-4 text-[15px]">
        신비롭게
        <span className="w-[1px] h-1/2 bg-emerald-200"></span>
        화려하게
        <span className="w-[1px] h-1/2 bg-emerald-200"></span>
        독특하게
      </p>
    </div>
  )
}

export default Ball