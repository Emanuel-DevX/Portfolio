import HeroSection from "./components/Hero"
import AboutSection from "./components/AboutSection"
import JourneySection from "./components/Journey"
import EducationSection from "./components/Education"
import HobbiesSection from "./components/Hobbies"

const Me = function () {
  
  return (
    <>
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <EducationSection />
        <HobbiesSection />

      </div>
    </>
  )
}

export default Me
