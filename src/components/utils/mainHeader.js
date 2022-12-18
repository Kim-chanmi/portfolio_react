import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const mainHeader = () => {
  // 새로고침 했을 때 스크롤을 맨 위로 올리는 법
  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };

  // 메인 글씨 쪼개기
  document.querySelectorAll(".split").forEach((desc) => {
    let splitText = desc.innerText;
    let splitWrap = splitText
      .split("")
      .join("</span><span aria-hidden='true'>");
    splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
    desc.innerHTML = splitWrap;
    desc.setAttribute("aria-label", splitText);
  });

  // main 글씨 효과
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".tit1, .tit4", {
    x: 200,
    scrollTrigger: {
      scrub: 1,
    },
  });

  gsap.to(".tit2, .tit5", {
    x: -200,
    scrollTrigger: {
      scrub: 1,
    },
  });
};

export default mainHeader;
