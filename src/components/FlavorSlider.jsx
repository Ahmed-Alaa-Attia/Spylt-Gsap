import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap/all";
import { useRef } from "react";

const FlavorSlider = () => {
  const sliderRed = useRef();
  useGSAP(() => {
    const scrollAmout = sliderRed.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        pin: true,
        end: `+=${scrollAmout}px`,
        scrub: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmout + 1500}px`,
    });
  });

  return (
    <div ref={sliderRed} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[5vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
