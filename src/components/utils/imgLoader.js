import React, { useEffect } from "react";
import imagesLoaded from "imagesloaded";
import gsap from "gsap";
import $ from "jquery";

const imgLoader = () => {
  useEffect(() => {
    function loading() {
      console.log("loading");
      let progress = $(".progress"),
        progressText = progress.find(".progress-text"),
        imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 1000 / 80);

      imgLoad.on("progress", function () {
        imgLoaded++;
      });

      function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;

        imgCurrent += (target - imgCurrent) * 0.1;
        progressText.text(Math.floor(imgCurrent) + "%");

        if (imgCurrent >= 100) {
          clearInterval(progressTimer);
          progress.delay(1000).animate(
            {
              top: "-130%",
            },
            400
          );

          $("body").addClass("show");

          let tl = gsap.timeline();
          tl.to(".tit3 span", {
            delay: 1,
            duration: 0.8,
            stagger: 0.03,
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power4.easeInOut,
          });
          tl.to(".tit6 span", {
            // delay: 1.2,
            duration: 0.8,
            stagger: 0.03,
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power4.easeInOut,
          });
          tl.to("#canvas", { duration: 1, opacity: 1, delay: 1 }, "b");
          tl.to(
            ".tit3",
            { duration: 0.8, paddingTop: "1vw", ease: Power1.easeInOut },
            "b"
          );
          tl.to(".tit6", { duration: 0.8, y: 0, ease: Power1.easeInOut }, "b");
          tl.to(
            ".tit4",
            {
              duration: 1,
              opacity: 1,
              marginLeft: "-40vw",
              ease: Power4.easeInOut,
            },
            "a"
          );
          tl.to(
            ".tit5",
            {
              duration: 1,
              opacity: 1,
              marginLeft: "40vw",
              ease: Power4.easeInOut,
            },
            "a"
          );
          tl.to(
            ".tit1",
            {
              duration: 1,
              opacity: 1,
              marginLeft: "-20vw",
              ease: Power4.easeInOut,
            },
            "a"
          );
          tl.to(
            ".tit2",
            {
              duration: 1,
              opacity: 1,
              marginLeft: "40vw",
              ease: Power4.easeInOut,
            },
            "a"
          );
          tl.to("#header", { duration: 1, top: 0, ease: Power4.easeInOut });
        }

        if (imgCurrent > 99) {
          imgCurrent = 100;
        }
      }
    }
    loading();
  }, []);

  // 새로고침 했을 때 스크롤을 맨 위로 올리는 법
  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };
};

export default imgLoader;
