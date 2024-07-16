import "../../styles/sec2.css";
import React, { useState, forwardRef } from "react";
import { imgBundle2 } from "../../utils/image";

const Sec2 = forwardRef(({ sec2Ref }, ref) => {
  const [infoType, setInfoType] = useState("Personal");

  const handleInfoClick = (type) => {
    setInfoType(type);
  };

  return (
    <section
      className="sec sec2"
      style={{ backgroundColor: "#0a0a0a" }}
      ref={sec2Ref}
    >
      <article className="sec2_AboutMe">
        <div className="AM_inner">
          <div className="AM_img_grid_wrap">
            <div className="AM_grid1 grid">
              <figure>
                <img src id="test1"></img>
                <figcaption>
                  <p>#CREATIVE</p>
                </figcaption>
              </figure>
            </div>
            <div className="AM_grid2 grid">
              <figure>
                <img src id="test1"></img>
                <figcaption>
                  <p>#RESPONSIBLE</p>
                </figcaption>
              </figure>
            </div>
            <div className="AM_grid3 grid">
              <figure>
                <img src id="test1"></img>
                <figcaption>
                  <p>#POSITIVE</p>
                </figcaption>
              </figure>
            </div>
            <div className="AM_grid4 grid">
              <figure>
                <img src id="test1"></img>
                <figcaption>
                  <p>#SOCIABLE</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="AM_wrap">
            <h2>
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
              <span className="color">M</span>
              <span className="color">E</span>
            </h2>
            <div className="AM_btn">
              <span
                className={`P_info ${infoType === "Personal" ? "active" : ""}`}
                onClick={() => handleInfoClick("Personal")}
              >
                Personal Info
              </span>
              <span
                className={`E_info ${infoType === "Education" ? "active" : ""}`}
                onClick={() => handleInfoClick("Education")}
              >
                Education
              </span>
            </div>
            <div className="AM_midle_txt">
              {infoType === "Personal" ? (
                <p>
                  신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어 겸손함을
                  <br />
                  유지하며 세부적인 곳까지 파고드는 개발자가 되겠습니다.
                </p>
              ) : (
                <p>
                  역동적이고 매력적인 경험을 좋아합니다, 그렇기에 제가 만든 사이트에서도 같은 경험을 느끼게 하고 싶습니다.
                </p>
              )}
            </div>
            <div className="AM_cont">
              {infoType === "Personal" ? (
                <table className="AM_info">
                  <thead>
                    <tr>
                      <th>
                        <img src={imgBundle2[0].src} />
                      </th>
                      <th className="icon_txt">신효준</th>
                    </tr>
                    <tr>
                      <td>
                        <img src={imgBundle2[1].src} />
                      </td>
                      <td className="icon_txt">2001.07.24</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={imgBundle2[2].src} />
                      </td>
                      <td className="icon_txt">@noboo724</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={imgBundle2[3].src} />
                      </td>
                      <td className="icon_txt">010-6660-8657</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={imgBundle2[4].src} />
                      </td>
                      <td className="icon_txt">sksdhkd0724@gmail.com</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={imgBundle2[5].src} />
                      </td>
                      <td className="icon_txt">https://github.com/Shikaboo</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="AM_info">
                  <thead>
                    <tr>
                      <th>
                        <img/>
                        <p className="subheading">Hobby</p>
                      </th>
                      <th className="subTxt">
                        <p>취미 1</p>
                        <p>취미 2</p>
                        <p>취미 3</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img />
                        <p className="subheading">Education</p>
                      </td>
                      <td className="subTxt">
                        <p>고등학교</p>
                        <p>노원그린컴퓨터아카데미</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec2;
