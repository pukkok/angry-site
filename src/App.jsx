import HalfSection from "./components/Half"
import TestSection from "./components/Half/Test"
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
      <SlateSection>something wrong</SlateSection>
      <TestSection />
    </div>
  )
}

export default App