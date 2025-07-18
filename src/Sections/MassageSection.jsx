import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MassageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
    const secMsgSplit = SplitText.create(".secound-message", { type: "words" });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      stagger: 0.6,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
    });

    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      delay: 1,
      stagger: 0.6,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "78% bottom",
        end: "105% bottom",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content",
        start: "73% bottom",
        toggleActions: "play none none reset",
      },
    });

    revealTl
      .to(".msg-text-scroll", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "circ.out",
      })
      .from(paragraphSplit.words, {
        opacity: 0,
        rotate: 3,
        yPercent: 300,
        stagger: 0.01,
        ease: "power1.inOut",
      });
  });
  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-32 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5 ">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="secound-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-20">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassageSection;
