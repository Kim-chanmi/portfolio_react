import React from "react";

const effectText = [
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/mouseEffect01.html",
    img: "effect01",
    alt: "마우스이펙트",
    tit: "Mouse Effect",
    desc: "마우스 커서의 움직임에 따라 \n다양한 mouse effect를 주는 스크립트입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/parallaxEffect01.html",
    img: "effect02",
    alt: "페럴렉스이펙트",
    tit: "Parallax Effect",
    desc: "스크롤값에 따라 다양한 \nparallax effect를 주는 스크립트입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/searchEffect01.html",
    img: "effect03",
    alt: "서치이펙트",
    tit: "Search Effect",
    desc: "keyup event를 활용하여 \ncss 속성들을 공부할 수 있는 스크립트입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/sliderEffect01.html",
    img: "effect04",
    alt: "슬라이드이펙트",
    tit: "Slider Effect",
    desc: "javascript를 이용해 \n보여주는 다양한 slide입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/quizEffect01.html",
    img: "effect05",
    alt: "퀴즈이펙트",
    tit: "Quiz Effect",
    desc: "기출문제를 활용하여 \n다양한 quiz effect를 보여주는 스크립트입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/gameEffect01.html",
    img: "effect06",
    alt: "뮤직플레이어",
    tit: "Music Player",
    desc: "javascript를 활용한 \n다양한 기능이 있는 music player입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/gameEffect01.html",
    img: "effect07",
    alt: "테트리스게임",
    tit: "Tetris Game",
    desc: "javascript를 이용하여 \n제작한 tetris game 입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/gameEffect01.html",
    img: "effect08",
    alt: "메모리게임",
    tit: "Memory Game",
    desc: "javascript를 이용하여 \n제작한 memory game 입니다.",
  },
  {
    aLink:
      "https://kim-chanmi.github.io/codingclass/javascript/effect/gameEffect01.html",
    img: "effect09",
    alt: "서치게임",
    tit: "Search Game",
    desc: "javascript를 이용하여 \n제작한 search game 입니다.",
  },
];

const EffectCont = ({ aLink, img, alt, tit, desc }) => {
  return (
    <div className="effectCont">
      <a href={`${aLink}`} target="_blank">
        <img src={`img/${img}.png`} alt={`${alt}`} />
        <h2 className="theramy">{tit}</h2>
        <p>{desc}</p>
      </a>
    </div>
  );
};

const Section04 = () => {
  return (
    <section id="section4" className="sec4 white score">
      <div className="sec4__inner">
        <div className="sec4__title">
          <h2 className="poppins">
            <em className="theramy">03</em>effect
          </h2>
        </div>
        <p className="effect score">
          자바스크립트를 활용한 다양한 효과들을 공부하였습니다. 마우스 좌표값을
          이용하여 만든 마우스 효과, 스크롤값을 이용한 페럴렉스 효과, CSS
          속성들을 공부하기 위한 서치 효과, 여러가지 다양한 방법으로 움직이는
          슬라이더 효과, 웹디자인기능사 기출문제를 활용한 퀴즈 효과가 있습니다.
          각각의 효과별로 한 가지씩이 아닌 다양한 버전으로 준비되어 있습니다.
          그리고 음악 재생 플레이어, 추억의 테트리스 게임, 카드 짝 기억해서
          맞추는 메모리 게임, css 속성들을 이용한 서치게임을 제작하였습니다.
          서치게임은 시간제한이 있으며, 음악 재생과 정지를 조절할 수 있습니다.
        </p>
        <div className="effectCont__wrap">
          <div className="effectCont__inner">
            {effectText.map((info, index) => (
              <EffectCont
                key={index}
                aLink={info.aLink}
                img={info.img}
                alt={info.alt}
                tit={info.tit}
                desc={info.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
