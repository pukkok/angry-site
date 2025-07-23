const NextDescription = ({ first, second, description }) => {

  return (
    <div className="animate-pulse">
      <h2 className='text-xl tracking-widest opacity-60'>NEXT:</h2>
      <h2 className='text-4xl font-bold'>{first}</h2>
      <h2 className='text-4xl font-bold'>{second}</h2>
      <p className="text-sm opacity-50 mt-2">{description}</p>
    </div>
  )
}

export default NextDescription