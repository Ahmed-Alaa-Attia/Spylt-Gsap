import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split", {
      type: "chars",
    });

    const secondTextSplit = SplitText.create(".second-text-split", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });

    const titleTl = gsap.timeline({
      scrollTrigger: ".flavor-section",
      start: "top top",
      end: "bottom 80%",
      scrub: true,
    });

    titleTl
      .to(".first-text-split", {
        yPercent: -33,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          yPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          yPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div
        style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
