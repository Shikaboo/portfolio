import "../styles/App.css";

import  Scrolling  from "../components/common/scrolling";

import  Three  from "../components/section/three";
import { Sec1 } from "../components/section/sec1";
import { Sec2 } from "../components/section/sec2";
import  Circles  from "../components/section/circles"; // sec3
import  Test  from "../components/section/test"; //sec4
import { Sec5 } from "../components/section/sec5";
import Credit from "../components/section/credit";

function Main() {
  return (
    <>
      <Scrolling />
      <Three />
      <Sec1 />
      <Sec2 />
      <Circles />
      <Test />
      <Sec5 />
      <Credit />
    </>
  );
}

export default Main;
