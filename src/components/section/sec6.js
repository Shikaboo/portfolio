import React, { useState, useRef, forwardRef, useEffect } from "react";
import PublicBtn from "../common/project_btn";
import { clones } from "../../utils/text";
import { imgBundle } from "../../utils/image";

const Sec6 = forwardRef(({ sec6Ref }, ref) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const followerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, right } = event.currentTarget.getBoundingClientRect();
    const threshold = 200; // 단위: 픽셀

    if (
      (clientX <= left + threshold || clientX >= right - threshold) &&
      clientY <= window.innerHeight / 1.5
    ) {
      setMousePos({ x: clientX, y: clientY });
      setIsMouseOver(true);
    } else {
      setIsMouseOver(false);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sec6Element = sec6Ref.current;
      const rect = sec6Element.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!isVisible) {
        setIsMouseOver(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <div className="clone_mockUp">
            {clones.map((clone) => (
              <figure key={clone.id}>
                <img></img>
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
                  <PublicBtn />
                </figcaption>
              </figure>
            ))}
          </div>
          <div
            ref={followerRef}
            className="mouse-follower"
            style={{ top: mousePos.y, left: mousePos.x }}
          >
            <img src={mousePos.x < window.innerWidth / 2 ? imgBundle[6].src : imgBundle[5].src} />
          </div>
        </div>
        <div className="pagenation_wrap">
          <ul className="pagenation">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </article>
    </section>
  );
});

export default Sec6;
