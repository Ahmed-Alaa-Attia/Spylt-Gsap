import gsap from "gsap";
import NavBar from "./components/NavBar";
import HeroSection from "./Sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MassageSection from "./Sections/MassageSection";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // higher = more smooth/laggy
      effects: true, // enable data-speed parallax
    });
  });

  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <NavBar />
          <HeroSection />
          <MassageSection />
          <div className="h-dvh overflow-hidden z-50" />
        </div>
      </div>
    </main>
  );
};

export default App;
