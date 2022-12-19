import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const section = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // 헤더
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".sec4",
    scrub: 1,
    // 어디에 적용할건지
    animation: gsap.fromTo(
      ".vertex, .vertex ul a",
      {
        color: "#fff",
      },
      {
        color: "#000",
      }
    ),
  });

  //   // 가로모드
  //   const sections = gsap.utils.toArray(".sec3-1"); // 다중이 == querySelectorAll

  //   ScrollTrigger.matchMedia({
  //     "(min-width: 1024px)": function () {
  //       gsap.to(sections, {
  //         xPercent: -100 * (sections.length - 1),
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".horizontalWrap",
  //           pin: true,
  //           scrub: 1,
  //           end: "+=3000", //speed
  //           //   markers: true,
  //         },
  //       });
  //     },
  //   });

  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".sec4",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.fromTo(
      ".vertex ul",
      {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      },
      {
        backgroundColor: "#f2f2f2",
      }
    ),
  });

  // sec3 -> sec4
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".sec4",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.fromTo(
      ".sec3",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 96%)",
        duration: 2,
        delay: 2,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 2,
        delay: 2,
      }
    ),
  });

  // effect 나타내기
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1000px)", () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger:
            ".effectCont:nth-child(2), .effectCont:nth-child(5), .effectCont:nth-child(8)",
          scrub: 1,
        },
      })
      .to(
        ".effectCont:nth-child(2), .effectCont:nth-child(5), .effectCont:nth-child(8)",
        {
          y: -1000,
          scrub: 1,
          stagger: 0.1,
          ease: "power1.out",
        }
      );
  });

  let mm2 = gsap.matchMedia();
  mm2.add("(min-width: 1000px)", () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger:
            ".effectCont:nth-child(3), .effectCont:nth-child(6), .effectCont:nth-child(9)",
          scrub: 1,
        },
      })
      .to(
        ".effectCont:nth-child(3), .effectCont:nth-child(6), .effectCont:nth-child(9)",
        {
          y: -400,
          scrub: 1,
          stagger: 0.1,
          ease: "power1.out",
        }
      );
  });

  // effect
  let mm3 = gsap.matchMedia();
  mm3.add("(min-width: 1000px)", () => {
    ScrollTrigger.create({
      trigger: ".sec4__title",
      scrub: 1,
      animation: gsap.fromTo(
        ".sec4__inner",
        {
          scale: (0.4, 0.4),
          opacity: 0,
          transformOrigin: "1000px 18px",
          transform: "translate(0,50px)",
          filter: "blur(5px)",
        },
        {
          scale: 1,
          opacity: 1,
          transformOrigin: "50% 0%",
          transform: "translate3d(0,-10px,0)",
          filter: "blur(0px)",
        }
      ),
    });
  });

  //study
  let mm4 = gsap.matchMedia();
  mm4.add("(min-width: 1000px)", () => {
    ScrollTrigger.create({
      trigger: ".sec5__title",
      scrub: 1,
      animation: gsap.fromTo(
        ".sec5",
        {
          scale: (0.8, 0.8),
          opacity: 0,
          transform: "translate(0,50px)",
          transformOrigin: "1300px 18px",
        },
        {
          scale: 1,
          opacity: 1,
          transform: "translate3d(0,-30px,0)",
          transformOrigin: "50% 0%",
        }
      ),
    });
  });

  // contact me
  // let mm5 = gsap.matchMedia();
  // mm5.add("(min-width: 1000px)", () => {
  //   ScrollTrigger.create({
  //     trigger: ".sec6__inner",
  //     scrub: 1,
  //     animation: gsap.fromTo(
  //       ".sec6__inner",
  //       {
  //         scale: (0.9, 0.9),
  //         // opacity: 0,
  //         transform: "translate(0,50px)",
  //         transformOrigin: "1300px 18px",
  //       },
  //       {
  //         scale: 1,
  //         // opacity: 1,
  //         transform: "translate3d(0,-30px,0)",
  //         transformOrigin: "50% 0%",
  //       }
  //     ),
  //   });
  // });
};

export default section;
