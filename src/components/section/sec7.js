import React, { forwardRef } from "react";
import PublicBtn from "../common/project_btn";

const Sec7 = forwardRef(({ sec7Ref }, ref) => {
  return (
    <section className="sec sec7" ref={sec7Ref}>
      <article className="sec7_inner">
        <div className="sec7_tit">
          <h2>TOY PROJECT</h2>
          <span></span>
        </div>
        <div className="toy_project_slide_set">
          <div className="slide_img_set">
            <div className="slick-list">
              <ul className="slick-track">
                <li className="item item1">
                  <img />
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
          <div className="slide_text_set">
            <div className="slick_list_text">
              <ul className="slick-track_text">
                <li className="txt_item txt_item1">
                  <div className="text_box">
                    <span className="tit_deco">My First Toy Project</span>
                    <span className="tit">Project Name</span>
                    <span className="cont">
                      해당 토이 프로젝트에 대한 간략한 설명 을 할 예정입니다
                      -----(만든 이유, 기능, 사용 기술 등을서술)-----
                    </span>
                    <PublicBtn />
                  </div>
                </li>
              </ul>
            </div>
            <div className="dots_wrap">
              <ul className="dots">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec7;
