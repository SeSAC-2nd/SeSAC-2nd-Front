import React, { useRef, useState } from 'react';
import '../styles/layout/Header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faL } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderSideMenu from '../components/HeaderSideMenu';
import { loginMenu } from '../data/loginData';
import Category from '../components/Category';
import Search from '../components/Search';
import Login from '../components/Login';

// header 컴포넌트
export default function Header() {
  // 임시 로그인 상태 리덕스
  const { isLogin, isAdmin, isSeller, isBlackList } = useSelector(
    (state) => state.login,
  );

  // 모바일 요소 useRef
  const headerRef = useRef([]);
  const headerTopRef = useRef();

  // 햄버거 버튼 클릭(메뉴 열림)
  const openMenu = (e) => {
    const hambtn = e.currentTarget;
    hambtn.style.display = 'none';
    hambtn.nextElementSibling.style.display = 'inline-block';
    const moveElement = headerRef.current;
    headerTopRef.current.style.height = '15rem';
    moveElement.forEach((ele) => ele.classList.add('on'));
  };

  // 뒤로가기 버튼 클릭(메뉴 닫힘)
  const closeMenu = (e) => {
    const backbtn = e.currentTarget;
    backbtn.style.display = 'none';
    backbtn.previousElementSibling.style.display = 'inline-block';
    const moveElement = headerRef.current;
    moveElement.forEach((ele) => ele.classList.remove('on'));
    setTimeout(() => {
      headerTopRef.current.style.height = '4rem';
    }, 300);
  };

  const openLogin = (e) => {
    e.preventDefault();
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
      loginContainer.style.display = 'block';
    }
  };

  const loginFn = () => {};

  return (
    <header>
      <div className="inner">
        <div className="header-top" ref={headerTopRef}>
          {/* 메인로고 */}
          <h1 className="header-logo">
            <Link to="/">리블링스</Link>
          </h1>
          {/* 검색창 */}
          <div
            className="header-search"
            ref={(el) => (headerRef.current[0] = el)}
          >
            <Search />
          </div>
          <div className="side-menu" ref={(el) => (headerRef.current[1] = el)}>
            {/* 판매하기 버튼 */}
            <div className="sales-btn">
              {/* 판매자일때만 판매하기 버튼 출력 */}
              {/* 블랙리스트일때는 판매하기 버튼 눌러도 판매하기로 이동 X */}
              {isLogin && isSeller && !isAdmin && (
                <Link to="/posts/create">판매하기</Link>
              )}
            </div>
            {/* 회원정보 버튼들 */}
            <aside className="side-menubtn">
              {/* 로그인 : 장바구니/마이페이지/로그아웃, 로그아웃 : 장바구니(로그인으로이동)/회원가입/로그인, 관리자 : 장바구니/관리자페이지/로그아웃 */}
              {isLogin ? (
                isAdmin ? (
                  // 관리자
                  <HeaderSideMenu logstate={loginMenu[2]} loginFn={loginFn} />
                ) : (
                  // 로그인
                  <HeaderSideMenu logstate={loginMenu[0]} loginFn={loginFn} />
                )
              ) : (
                // 로그아웃
                <HeaderSideMenu logstate={loginMenu[1]} loginFn={openLogin} />
              )}
            </aside>
          </div>
        </div>
        {/* 카테고리 버튼들 */}
        <nav className="gnb" ref={(el) => (headerRef.current[2] = el)}>
          <Category />
        </nav>
        {/* 햄버거 버튼 - 모바일뷰 */}
        <div className="ham-btnbx">
          <button className="ham-btn" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button className="back-btn" onClick={closeMenu}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
      </div>
      {/* 로그인 창 띄우기 */}
      {isLogin ? null : <Login />}
    </header>
  );
}
