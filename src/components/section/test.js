import "../../styles/test.css";

import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { imgBundle } from "../../utils/image";
import { ReactComponent as First_Wave } from "../../assets/img/layered_waves_haikei1.svg";
import { ReactComponent as Second_Wave } from "../../assets/img/layered_waves_haikei2.svg";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {

    // SVG 요소의 초기 높이를 설정
    gsap.set(svg1Ref.current, { height: "50%" });
    gsap.set(svg2Ref.current, { height: "50%"});

    // ScrollTrigger를 사용하여 스크롤 이벤트 설정
    ScrollTrigger.create({
      trigger: svg2Ref.current,
      start: "bottom bottom",
      end: "+=100 10%", // 추가 스크롤 범위 설정
      pin: mainRef.current, // main 요소를 고정
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // SVG 요소의 높이를 줄이기
        gsap.to(svg1Ref.current, { height: `${50 - 50 * progress}%` });
        gsap.to(svg2Ref.current, { height: `${50 - 50 * progress}%` });
      },
    });
  }, []);

  return (
    <section>
      <article>
        <div id="svg1" ref={svg1Ref}>
          <First_Wave />
        </div>
        <div id="svg2" ref={svg2Ref}>
          <Second_Wave />
        </div>
        <div className="main" ref={mainRef} style={{ overflow: 'hidden' }}>
          <div className="BgImg1">
            <img src={imgBundle[0].src} />
          </div>
          <div className="BgImg2">
            <img src={imgBundle[1].src} />
          </div>
          <div className="tit_wrap_sec">
            <ul className="tit_wrap">
              <li className="tit">
                <h2>
                  About My <span>Project</span>
                </h2>
              </li>
              <li>
                <div id="Scrolltn">
                  <span>WEB CLONE</span>
                </div>
              </li>
              <li>
                <div id="Scrolltn">
                  <span>PROJECT</span>
                </div>
              </li>
              <li>
                <div id="Scrolltn">
                  <span>TOY PROJECT</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="BgImg3">
            <img src={imgBundle[2].src} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Test;
