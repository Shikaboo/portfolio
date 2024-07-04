import PublicBtn from "../common/project_btn";

export default function Sec6() {
  return (
    <section className="sec sec6">
      <article>
        <div className="sec6_tit">
          <h2>WEB CLONE</h2>
          <span></span>
        </div >
        <div className="clone_mockUp_wrap">
          <div className="clone_mockUp">
            <figure>
              <img></img>
              <figcaption>
                <h4>Domino Pizza</h4>
                <p>
                  도미노 피자 메인 페이지를 클로닝 했습니다.
                  <br />
                  미디어쿼리를 통한 반응형 작업과 JS를 통한
                  <br />
                  간단한 동적 기능을 추가했습니다.
                </p>
                <PublicBtn />
              </figcaption>
            </figure>
            <figure>
              <img></img>
              <figcaption>
                <h4>Lotte Bizcar</h4>
                <p>
                  롯데 비즈카 메인 페이지를 클로닝 했습니다. 미디어쿼리를 통한
                  반응형 작업 및 스와이퍼 cdn을 연결하여 슬라이드 기능과 JS를
                  통해 간단한 버튼 클릭 메뉴 기능을 구현했습니다.
                </p>
                <PublicBtn />
              </figcaption>
            </figure>
            <figure>
              <img></img>
              <figcaption>
                <h4>국립공주박물관</h4>
                <p>
                  국립 공주 박물관 메인 페이지를 클로닝 했습니다. position을
                  이용해 사이트가 꾸며져 있었기에 최대한 position을 사용하지
                  않는 선에서 메인 페이지를 따라해보려 노력했습니다, 앞선 클로닝
                  사이트와 마찬가지로 간단한 반응형 작업도 진행했습니다.
                </p>
                <PublicBtn />
              </figcaption>
            </figure>
            <figure>
              <img></img>
              <figcaption>
                <h4>SOCAR</h4>
                <p>
                  SOCAR의 메인 페이지를 클로닝 해봤습니다. 리액트를 처음 배울
                  당시에 리액트 문법 및 컴포넌트 사용을 숙달하기 위해 클로닝을
                  진행했습니다.
                </p>
                <PublicBtn />
              </figcaption>
            </figure>
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
}
