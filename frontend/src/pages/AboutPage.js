import React, { useEffect, useState } from 'react';
import '../styles/pages/AboutPage.scss';
import { Link } from 'react-router-dom';
import { showAlert } from '../utils/alert';

// 소개페이지
export default function AboutPage() {
  const handleLoginModal = async (e) => {
    const loginContainer = document.querySelector('.login-container');
    e.preventDefault();
    const result = await showAlert('warning', '로그인 후 이용 가능합니다.');
    if (result) {
      loginContainer.style.display = 'block';
    }
    return;
  };
  return (
    <>
      <section id="about">
        <div className="about-wrap">
          <div className="about-left">
            <img src="/img/computer.png" className="computer-img" />
            <h2 className="left-title">
              <strong className="logo">리블링스</strong>에 오신 것을
              <br /> 환영합니다!
            </h2>
            <img src="/img/heart.png" className="heart-img" />
          </div>
          <div className="about-right">
            <div className="txt1">
              <h3>
                <span>
                  <dfn>
                    <abbr title="특정한 분야나 대상을 열정적으로 좋아하고 그에 대한 활동을 즐기는 것을 의미합니다. ">
                      덕질
                    </abbr>
                  </dfn>
                  의 즐거움을 함께 나누는 공간,&nbsp;
                  <strong className="logo">리블링스</strong>는 독일어로
                  <abbr title="'최고로 애정하는'의 줄임말">
                    &apos;최애&apos;
                  </abbr>
                  를 의미합니다.
                </span>
              </h3>
              <p>
                덕질의 열정은 시간이 흘러도 변하지 않습니다. 하지만 최애가
                바뀌기도 하고, 새로운 애정을 찾기도 합니다. 저희 웹 사이트는
                K-pop, 스포츠, 애니메이션, 영화/드라마, 게임, 스포츠 등&nbsp;
                <strong>
                  &apos;다양한 덕질 분야의 물품을 중고 거래할 수 있는 공간&apos;
                </strong>
                입니다.
              </p>
              <strong className="milky">
                &#34; 나의 구최애가 너의 현최애다, 너의 구최애가 나의
                현최애다.&#34;
              </strong>
              <p>
                이곳에서는 여러분이 소중히 아꼈던 물품들이 새로운 주인을 만나 또
                다른 이야기를 이어갈 수 있습니다. 누군가의 최애였던 아이템이 또
                다른 누군가에게 큰 기쁨을 줄 수 있도록, 여러분의 추억을 함께
                나누어 주세요.
                <br /> 나만의 구최애를 찾고, 더 이상 필요하지 않은 아이템을
                누군가에게 전달하여 새로운 가치를 창출할 수 있습니다. 새로운
                최애를 찾는 여정도, 과거의 애정을 되살리는 기쁨도 이곳에서
                시작됩니다.
              </p>
              <p>
                리블링스에서는 모든 거래 과정에서 사용자 보호를 최우선으로
                생각합니다. <br />
                안전하고 편리한 거래를 지원하며, 여러분의 덕질이 더 풍성해지는
                경험을 제공하기 위해 최선을 다하겠습니다.
              </p>
              <p className="txt-right">리블링스 일동 올림</p>
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <p>
            리블링스와 함께 행복한 덕질을&nbsp;
            <span>시작해볼까요?</span>
          </p>
          <div className="link-wrap">
            <Link className="link-btn btn" to={'/'} onClick={handleLoginModal}>
              구최애 나누러 가기
            </Link>
            <Link className="link-btn btn" to={'/'}>
              새로운 현최애 찾으러 가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
