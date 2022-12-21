import React from "react";

const Section05 = () => {
  return (
    <section id="section5" className="sec5 white score">
      <div className="sec5__inner">
        <div className="sec5__title">
          <h2 className="poppins">
            <em className="theramy">04</em>study
          </h2>
        </div>
        <p className="study score">
          그동안 학원 수강하면서 제가 공부한 것들을 모아놓은 스터디
          리스트입니다. MDN 사이트를 참고하여 작성한 HTML과 CSS의 속성
          리스트들과 설명들, 수업시간에 배운 내용들을 토대로 정리한
          자바스크립트의 공부내용들을 확인하실 수 있습니다. 이것들은 앞으로도
          더욱 더 공부하면서 추가할 예정입니다. 수업시간에 배웠던 자바스크립트를
          더 활용하기 위하여 프로그래머스의 1단계 알고리즘 문제들을
          풀어보았습니다. 풀이한 문제들은 블로그에 정리하였으니 참고하여 주시기
          바랍니다. 또한, 제가 공부한것들을 모두 모아놓은 티스토리 블로그도
          있습니다. 아직도 부족한 점은 많지만 어떠한 일이든 배울 준비가
          되어있습니다. 신입의 반짝이는 열정이 아닌 꾸준하게 노력하는 모습
          보여드리겠습니다.
        </p>
        <div className="studyList__wrap">
          <span>study list</span>
          <div className="studyList__inner">
            <div className="studyList">
              <a
                href="https://kim-chanmi.github.io/codingclass/html/alphabet.html"
                target="_blank"
              >
                <div className="vertex2">
                  HTML
                  <br />
                  Reference
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://kim-chanmi.github.io/codingclass/css/index.html"
                target="_blank"
              >
                <div className="vertex2">
                  CSS <br />
                  Reference
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://kim-chanmi.github.io/codingclass/javascript/index.html"
                target="_blank"
              >
                <div className="vertex2">
                  Javascript <br />
                  Reference
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://se-se.tistory.com/category/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
                target="_blank"
              >
                <div className="vertex2">
                  ALGORITHM <br />
                  PROGRAMMERS
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a href="https://se-se.tistory.com/" target="_blank">
                <div className="vertex2">
                  TISTORY BLOG
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://kim-chanmi.github.io/codingclass/sql/index.html"
                target="_blank"
              >
                <div className="vertex2">
                  MYSQL
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://kim-chanmi.github.io/codingclass/animation/css.html"
                target="_blank"
              >
                <div className="vertex2">
                  ANIMATION
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://kim-chanmi.github.io/codingclass/animation/svg.html"
                target="_blank"
              >
                <div className="vertex2">
                  SVG
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a href="https://codepen.io/your-work/" target="_blank">
                <div className="vertex2">
                  CODEPEN
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
            <div className="studyList">
              <a
                href="https://se-se.tistory.com/category/jQuery"
                target="_blank"
              >
                <div className="vertex2">
                  JQUERY
                  <em className="arrow" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </em>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
