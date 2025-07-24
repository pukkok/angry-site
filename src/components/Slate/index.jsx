import { motion } from "framer-motion"

const SlateSection = ({ children }) => {
  // INFO: 문자열을 배열로 쪼개기
  const letters = [...children]

  return (
    <section className="h-[160vh] bg-black text-white text-9xl flex items-center justify-center">
      <motion.h1
        className="flex"
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }} // INFO: 반복 설정
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05, // INFO: 글자 간 딜레이
            }
          }
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {letter === ' ' ? '\u00A0' : letter} 
          </motion.span>
        ))}
      </motion.h1>
    </section>
  )
}

export default SlateSection

//INFO : '\u00A0': 유니코드 non-breaking space (줄바꿈이 일어나지 않는 공백 문자). HTML로 치면 &nbsp;