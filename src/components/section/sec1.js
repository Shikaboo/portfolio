import "../../styles/sec1.css";

import { imgBundle } from "../../utils/image";
import { ReactComponent as Hanger } from "../../assets/img/hanger.svg";


export const Sec1 = () => {
  return (
    <section className="sec sec1">
      <div className="personal_img">
        <img />
      </div>
      <div className="locate_hanger">
        <div className="hanger">
          <p>
            <span>Located</span>
            <span>in the</span>
            <span>South Korea</span>
          </p>
          <Hanger />
          <div className="digital_ball">
            <div className="overlay"></div>
            <div className="globe">
              <ul className="globe_wrap">
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle_hor"></li>
                <li className="circle_hor_middle"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="flex_col">
            <ul className="container_main_txt">
              <li>FRONTEND</li>
              <li>DEVELOPER</li>
            </ul>
            <div className="container_sub_txt">
              <p>도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.</p>
              <p>사용자들에게 다채로운 웹 경험을 제공하는 것이 저의 목표입니다.</p>
              <p>지속적인 학습을 통해 능력있는 프론트엔드 개발자로 성장하고 싶습니다.</p>
              <p>어려움을 마주해도 포기하지 않고 해결책을 찾아내기 위해 노력하고 있습니다.</p>
            </div>
          </div>
          <div className="scroll_text">
            <span>SCROLL DOWN</span>
            <div className="arrow">
                <img src={imgBundle[3].src} />
            </div>
          </div>
        </div>
      </div>
      <div className="big_name">
        <div className="name_h1">
            <div className="name_wrap">
                <h1>
                    Shin Hyo Jun
                    <span className="spacer">-</span>
                </h1>
            </div>
            <div className="name_wrap">
                <h1>
                    Shin Hyo Jun
                    <span className="spacer">-</span>
                </h1>
            </div>
        </div>
      </div>
    </section>
  );
};
