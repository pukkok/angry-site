const Cover = ({ref}) => {

  return (
    <div 
      ref={ref}
      className="fixed top-0 w-full h-screen">
        <div className="flex">
          <div className="w-3/5">
            <div>여긴 마스크 위에서 보여질 화면이야.</div>
            <h1>뭐든 가능하잖아.</h1>
            <p> 스크롤로 뭐든지 해봐. </p>
          </div>
          <article className={`
            w-30 h-screen relative overflow-hidden

            after:content-[""]
            after:absolute
            after:w-full
            after:bottom-0
            after:h-1/3
            after:bg-linear-to-t 
          after:from-white/60
          after:via-white/10
            after:to-transparent
            after:pointer-events-none
            after:backdrop-blur-[6px]
            after:z-10
          `}>
            <div className="flex items-center vertical-mode text-9xl scroll-up">
              <p className="h-screen px-10">SUPER DESIGN</p>
              <p className="h-screen px-10">SUPER DESIGN</p>
            </div>
          </article>
          <div className="right flex-1">
            오른쪽 파트
          </div>
        </div>
    </div>
  )
}

export default Cover