import "../../styles/sec2.css";
import React, { useState } from "react";
import { imgBundle2 } from "../../utils/image";

export const Sec2 = () => {
  const [infoType, setInfoType] = useState("Personal");

  const handleInfoClick = (type) => {
    setInfoType(type);
  };

  return (
    <section className="sec sec2" style={{ backgroundColor: "#0a0a0a" }}>
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
              ABOUT <span>ME</span>
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
              <p>
                신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어 겸손함을
                <br />
                유지하며 세부적인 곳까지 파고드는 개발자가 되겠습니다.
              </p>
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
                      <th>교육기관</th>
                      <th>기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>서울대학교</td>
                      <td>2019 - 2023</td>
                    </tr>
                    <tr>
                      <td>한국정보교육원</td>
                      <td>2023 - 현재</td>
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
};
