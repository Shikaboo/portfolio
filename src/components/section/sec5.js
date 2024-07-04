import "../../styles/sec5.css";

import Sec6 from "./sec6";
import Sec7 from "./sec7";

import PublicBtn from "../common/project_btn";

import React, { useRef, useEffect } from "react";

export const Sec5 = () => {

  return (
    <div className="box2">
      <section className="sec sec5">
        <article>
          <h1>PROJECT</h1>
          <div className="project_box_world_wrap">
            <div className="project_box_wrap">
              <p className="project_tit">
                <span>01</span>.RENEWAL PROJECT
              </p>
              <div className="project_box1 project flex">
                <div className="box1_left flexCm">
                  <div className="project_img">
                    <img />
                  </div>
                </div>
                <div className="box1_right flexCm">
                  <div className="box1_right1 flexCm">
                    <div className="tit_arrow flex">
                      <h3>EXPLAIN</h3>
                      <p></p>
                    </div>
                    <div className="cont_wrap flex">
                      사용한 언어와
                      <br />
                      라이브러리에 대해
                      <br />
                      기재할 수 있는 공간입니다.
                      <br />
                      프로젝트에 대한
                      <br />
                      간략한 설명도 추가됩니다.
                    </div>
                  </div>
                  <div className="box1_right2 flexCm">
                    <div className="tit_arrow">
                      <h3>VIEW MORE</h3>
                      <p></p>
                    </div>
                    <PublicBtn />
                  </div>
                  <div className="box1_right3 flexCm">
                    <div className="tit_arrow flex">
                      <h3>TECH STACK</h3>
                      <p></p>
                    </div>
                    <div className="hash_wrap">
                      <ul className="hash_box flexCm">
                        <li>#programming language</li>
                        <li>#Production Period</li>
                        <li>#Library or Framework</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_box_wrap2">
              <p className="project_tit">
                <span>02</span>.FIRST TEAM PROJECT
              </p>
              <div className="project_box1 project flex">
                <div className="box1_left flexCm">
                  <div className="project_img">
                    <img />
                  </div>
                </div>
                <div className="box1_right flexCm">
                  <div className="box1_right1 flexCm">
                    <div className="tit_arrow flex">
                      <h3>EXPLAIN</h3>
                      <p></p>
                    </div>
                    <div className="cont_wrap flex">
                      사용한 언어와
                      <br />
                      라이브러리에 대해
                      <br />
                      기재할 수 있는 공간입니다.
                      <br />
                      프로젝트에 대한
                      <br />
                      간략한 설명도 추가됩니다.
                    </div>
                  </div>
                  <div className="box1_right2 flexCm">
                    <div className="tit_arrow">
                      <h3>VIEW MORE</h3>
                      <p></p>
                    </div>
                    <PublicBtn />
                  </div>
                  <div className="box1_right3 flexCm">
                    <div className="tit_arrow flex">
                      <h3>TECH STACK</h3>
                      <p></p>
                    </div>
                    <div className="hash_wrap">
                      <ul className="hash_box flexCm">
                        <li>#programming language</li>
                        <li>#Production Period</li>
                        <li>#Library or Framework</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_box_wrap3">
              <p className="project_tit">
                <span>03</span>.SECOND TEAM PROJECT
              </p>
              <div className="project_box1 project flex">
                <div className="box1_left flexCm">
                  <div className="project_img">
                    <img />
                  </div>
                </div>
                <div className="box1_right flexCm">
                  <div className="box1_right1 flexCm">
                    <div className="tit_arrow flex">
                      <h3>EXPLAIN</h3>
                      <p></p>
                    </div>
                    <div className="cont_wrap flex">
                      사용한 언어와
                      <br />
                      라이브러리에 대해
                      <br />
                      기재할 수 있는 공간입니다.
                      <br />
                      프로젝트에 대한
                      <br />
                      간략한 설명도 추가됩니다.
                    </div>
                  </div>
                  <div className="box1_right2 flexCm">
                    <div className="tit_arrow">
                      <h3>VIEW MORE</h3>
                      <p></p>
                    </div>
                    <PublicBtn />
                  </div>
                  <div className="box1_right3 flexCm">
                    <div className="tit_arrow flex">
                      <h3>TECH STACK</h3>
                      <p></p>
                    </div>
                    <div className="hash_wrap">
                      <ul className="hash_box flexCm">
                        <li>#programming language</li>
                        <li>#Production Period</li>
                        <li>#Library or Framework</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Sec6 />
      <Sec7 />
    </div>
  );
};
