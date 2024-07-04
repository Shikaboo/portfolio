import React, { useEffect, useRef } from "react";

import { imgBundle3 } from "../../utils/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Circles() {
  const circleRefs = useRef([]);
  const circleRefs2 = useRef([]);
  const sectionRef = useRef(null);

  // 원소를 생성하는 코드
  const clientCircles = Array.from({ length: 5 }, (_, index) => (
    <span className={`client_circle top left client0${index + 1}`} key={index}>
      <span
        className="circle_item"
        ref={(el) => (circleRefs.current[index] = el)}
      >
        <span className="circle">
          <img src={imgBundle3[index].src} />
          <span className="screen_out">{`${imgBundle3[index].cont}`}</span>
        </span>
      </span>
    </span>
  ));

  const clientCircles2 = Array.from({ length: 5 }, (_, index) => (
    <span className={`client_circle top left client0${index + 6}`} key={index + 6}>
      <span
        className="circle_item"
        ref={(el) => (circleRefs2.current[index] = el)}
      >
        <span className="circle">
          <img src={imgBundle3[index + 5].src} />
          <span className="screen_out">{`${imgBundle3[index + 5].cont}`}</span>
        </span>
      </span>
    </span>
  ));

  useEffect(() => {
    const circles1 = circleRefs.current;
    const circles2 = circleRefs2.current;

    gsap.set(circles1, { x: "-15vw", y: "-5vw", scale: 0.6, opacity: 0 });
    gsap.set(circles2, { x: "15vw", y: "-5vw", scale: 0.6, opacity: 0 });

    // ScrollTrigger를 사용하여 스크롤 이벤트 설정
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        // 원래 위치로 이동 및 보이게 설정
        gsap.to(circles1, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
        gsap.to(circles2, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
      },
      onLeaveBack: () => {
        // 다시 원래 위치로 돌아가게 설정
        gsap.to(circles1, {
          x: "-15vw",
          y: "-5vw",
          scale: 0.6,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
        gsap.to(circles2, {
          x: "15vw",
          y: "-5vw",
          scale: 0.6,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
      },
    });

    // 언마운트 시 ScrollTrigger 정리
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="section sec4" ref={sectionRef}>
      <div>
        <div className="main_client_wrap">
          <div className="cont_pc">
            <div className="scrollmagic-pin-spacer">
              <div className="main_client">
                <div className="main_client_tit">
                  <div className="tit">
                    <span>SKILLS</span>
                  </div>
                  <div className="swiper">
                    <div></div>
                  </div>
                </div>
                <div className="client_circle_wrap client_circle_wrap01">
                  {clientCircles}
                </div>
                <div className="client_circle_wrap client_circle_wrap02">
                  {clientCircles2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Circles;

