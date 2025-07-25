import AccelSection from "./components/Accel"
import HalfSection from "./components/Half"
import HeroSection from "./components/Hero"
import HorizonSection from "./components/Horizon"
import SlateSection from "./components/Slate"

const App = () => {

  return (
    <div className="">
      <HeroSection />
      <SlateSection>NEBULA</SlateSection>
      <HorizonSection />
      <SlateSection>CONSTELLATION</SlateSection>
      <HalfSection />
      <SlateSection>SPACE WORDS</SlateSection>
      <AccelSection />
    </div>
  )
}

export default App