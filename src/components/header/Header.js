import React from "react";
import { Link } from "react-router-dom";

import "./css/header.css";

const Header = () => {
    return (
        <header>
            <Link to="/">로고</Link>

            <nav>
                <Link to="/portfolio">포트폴리오</Link>
                <Link to="/suggestion">면접 제안</Link>
                <Link to="/enterprise">기업</Link>
                <Link to="/more">더보기</Link>
            </nav>

            <div className="search-wrap">
                <input type="text"/>
                <button>search</button>
            </div>

            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
        </header>
    );
};

export default Header;