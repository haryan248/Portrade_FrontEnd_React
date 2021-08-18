import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ActionCreators from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogout } from "react-google-login";

import "./css/header.css";

const Header = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.login.isLogin);
    const sessionStoragetokenCheck =
        window.sessionStorage.getItem("access_token");

    useEffect(() => {
        if (sessionStoragetokenCheck) {
            dispatch(ActionCreators.login());
        } else {
            dispatch(ActionCreators.logout());
        }
    }, [sessionStoragetokenCheck, dispatch]);

    const onLogoutSuccess = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            window.sessionStorage.clear();
            dispatch(ActionCreators.logout());
            window.location.href = "/";
        }
    };

    return (
        <header>
            <div className="logo">
                <Link to="/">PORTRADE</Link>
            </div>

            <nav className="nav-bar">
                <Link to="/introduce">사이트 소개</Link>
                <Link to="/portfolio">포트폴리오</Link>
                <Link to="/suggestion">추천 기업</Link>
                <Link to="/help">고객센터</Link>
            </nav>

            <div className="search-wrap">
                <input type="text" />
                <button>search</button>
            </div>

            <div className="nav-bar">
                {isLogin ? (
                    <GoogleLogout
                        buttonText="로그아웃"
                        onLogoutSuccess={() => onLogoutSuccess()}
                        clientId="988674118538-gog8quj6fimubp2b8dc6jhecui5e88cd.apps.googleusercontent.com"
                        className="google-logout"
                    />
                ) : (
                    <Link to="/login">로그인</Link>
                )}
                {isLogin ? (
                    <Link to="/mypage">마이페이지</Link>
                ) : (
                    <Link to="/register">회원가입</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
