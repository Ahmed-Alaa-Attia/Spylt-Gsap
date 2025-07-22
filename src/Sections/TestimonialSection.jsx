import { useRef } from "react";
import { cards } from "../constants";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const handelPlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handelPause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };
  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">what's</h1>
        <h1 className="text-light-brown second-title">everyone</h1>
        <h1 className="text-black third-title">talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handelPlay(index)}
            onMouseLeave={() => handelPause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
