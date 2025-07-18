import gsap from "gsap";
import NavBar from "./components/NavBar";
import HeroSection from "./Sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import MassageSection from "./Sections/MassageSection";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MassageSection />
      <div className="h-dvh overflow-hidden z-50" />
    </main>
  );
};

export default App;
