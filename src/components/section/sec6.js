// import React, { useState, useRef, forwardRef, useEffect } from "react";
// import { gsap } from "gsap";
// import PublicBtn from "../common/project_btn";
// import { clones } from "../../utils/text";
// import { imgBundle } from "../../utils/image";

// const Sec6 = forwardRef(({ sec6Ref }, ref) => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isMouseOver, setIsMouseOver] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2, 3]); // 처음에 보이는 figure의 인덱스
//   const followerRef = useRef(null);
//   const cloneMockUpRef = useRef(null);
//   const currentX = useRef(0);

//   // 마우스를 클릭하면 호출되는 함수
//   const handleMouseClick = () => {
//     setClicked(true); // 클릭 상태를 true로 설정
//     if (mousePos.x < window.innerWidth / 2) { // 마우스가 왼쪽 절반에 있을 때
//       gsap.to(cloneMockUpRef.current, { x: 0, duration: 0.5 });
//       currentX.current = 0; // 현재 위치를 0으로 설정
//       setVisibleIndexes([0, 1, 2, 3]); // 처음 4개의 인덱스를 보이도록 설정
//     } else { // 마우스가 오른쪽 절반에 있을 때
//       const newX = currentX.current - 540; // 현재 위치에서 540px 왼쪽으로 이동
//       gsap.to(cloneMockUpRef.current, { x: newX, duration: 0.5 });
//       currentX.current = newX; // 현재 위치 업데이트
//       setVisibleIndexes((prevIndexes) => prevIndexes.map(index => index + 1)); // 다음 4개의 인덱스를 보이도록 설정
//     }
//   };

//   // 마우스가 움직일 때마다 호출되는 함수
//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     const { left, right } = event.currentTarget.getBoundingClientRect();
//     const threshold = 200; // 단위: 픽셀

//     if (
//       (clientX <= left + threshold || clientX >= right - threshold) &&
//       clientY <= window.innerHeight / 1.5
//     ) {
//       setMousePos({ x: clientX, y: clientY });
//       setIsMouseOver(true);
//     } else {
//       setIsMouseOver(false);
//     }
//   };

//   // 마우스가 섹션을 벗어나면 호출되는 함수
//   const handleMouseLeave = () => {
//     setIsMouseOver(false);
//   };

//   // 스크롤 시 섹션이 화면에 보이는지 확인하는 함수
//   useEffect(() => {
//     const handleScroll = () => {
//       const sec6Element = sec6Ref.current;
//       const rect = sec6Element.getBoundingClientRect();
//       const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

//       if (!isVisible) {
//         setIsMouseOver(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 추가

//     return () => {
//       window.removeEventListener("scroll", handleScroll); // 스크롤 이벤트 제거
//     };
//   }, [sec6Ref]);

//   return (
//     <section
//       className={`sec sec6 ${isMouseOver ? "hide-cursor" : ""}`}
//       ref={sec6Ref}
//       onMouseLeave={handleMouseLeave}
//       onMouseMove={handleMouseMove}
//       onClick={handleMouseClick} // 클릭 이벤트 추가
//     >
//       <article>
//         <div className="sec6_tit">
//           <h2>WEB CLONE</h2>
//           <span></span>
//         </div>
//         <div className="clone_mockUp_wrap">
//           <div className="clone_mockUp" ref={cloneMockUpRef} style={{ transform: 'translateX(0px)' }}>
//             {clones.map((clone, index) => (
//               <figure key={clone.id}>
//                 <img src={clone.src} alt={clone.title} />
//                 <figcaption>
//                   <h4>{clone.title}</h4>
//                   <p>
//                     {clone.description.split("\n").map((line, idx) => (
//                       <React.Fragment key={idx}>
//                         {line}
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                   <PublicBtn page_link={clone.page_link} github_link={clone.github_link} />
//                 </figcaption>
//               </figure>
//             ))}
//           </div>
//           <div
//             ref={followerRef}
//             className="mouse-follower"
//             style={{
//               top: `${mousePos.y}px`,
//               left: `${mousePos.x}px`,
//               position: 'fixed',
//               display: isMouseOver ? 'block' : 'none'
//             }}
//           >
//             <img src={mousePos.x < window.innerWidth / 2 ? imgBundle[6].src : imgBundle[5].src} alt="mouse follower" />
//           </div>
//         </div>
//         <div className="pagenation_wrap">
//           <ul className="pagenation">
//             {clones.map((clone, index) => (
//               <li key={clone.id} style={{ backgroundColor: visibleIndexes.includes(index) ? '#fff' : '#7d7d7d' }}></li>
//             ))}
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// });

// export default Sec6;
import React, { useState, useRef, forwardRef, useEffect } from "react";
import { gsap } from "gsap";
import PublicBtn from "../common/project_btn";
import { clones } from "../../utils/text";
import { imgBundle } from "../../utils/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Sec6 = forwardRef(({ sec6Ref }, ref) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const followerRef = useRef(null);

  // 마우스가 움직일 때마다 호출되는 함수
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, right } = event.currentTarget.getBoundingClientRect();
    const threshold = 300; // 단위: 픽셀

    if (
      (clientX <= left + threshold || clientX >= right - threshold) &&
      clientY <= window.innerHeight / 1.5
    ) {
      setMousePos({ x: clientX, y: clientY });
      setIsMouseOver(true);
      setShowNext(clientX >= window.innerWidth / 2);
    } else {
      setIsMouseOver(false);
    }
  };

  // 마우스가 섹션을 벗어나면 호출되는 함수
  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  // 스크롤 시 섹션이 화면에 보이는지 확인하는 함수
  useEffect(() => {
    const handleScroll = () => {
      const sec6Element = sec6Ref.current;
      const rect = sec6Element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!isVisible) {
        setIsMouseOver(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 추가

    return () => {
      window.removeEventListener("scroll", handleScroll); // 스크롤 이벤트 제거
    };
  }, [sec6Ref]);

  return (
    <section
      className={`sec sec6 ${isMouseOver ? "hide-cursor" : ""}`}
      ref={sec6Ref}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <article>
        <div className="sec6_tit">
          <h2>WEB CLONE</h2>
          <span></span>
        </div>
        <div className="clone_mockUp_wrap">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {clones.map((clone, index) => (
              <SwiperSlide key={clone.id}>
                <figure>
                  <img className="project_img" src={clone.src} alt={clone.title} />
                  <figcaption>
                    <h4>{clone.title}</h4>
                    <p>
                      {clone.description.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <PublicBtn
                      page_link={clone.page_link}
                      github_link={clone.github_link}
                    />
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={followerRef}
            className={`mouse-follower ${showNext ? 'swiper-button-next' : 'swiper-button-prev'}`}
            style={{
              top: `${mousePos.y}px`,
              left: `${mousePos.x}px`,
              position: "fixed",
              display: isMouseOver ? "block" : "none",
            }}
          >
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec6;
