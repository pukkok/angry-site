import AccelSection from "./components/Accel"
import HalfSection from "./components/Half"
import HeroSection from "./components/Hero"
import HorizonSection from "./components/Horizon"
import ParallaxSecion from "./components/Parallax"
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
      <SlateSection>PARALLAX</SlateSection>
      <ParallaxSecion />
    </div>
  )
}

export default App