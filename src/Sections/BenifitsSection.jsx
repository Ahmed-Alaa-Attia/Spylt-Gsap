import { useGSAP } from "@gsap/react";
import ClipPath from "../components/ClipPath";
import gsap from "gsap/all";
import VideoPinSection from "../components/VideoPinSection";

const BenifitsSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
  });
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br /> Explore the Key Benefits of Choosing
            SPYLT
          </p>

          <div className="mt-20 col-center">
            <ClipPath
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPath
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPath
              title={"Infinietly Recycable"}
              color={"#faeade"}
              bg={"#7f3b2d"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPath
              title={"lactose Free"}
              color={"#2e2d2f"}
              bg={"#fed775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10 ">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenifitsSection;
