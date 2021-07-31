import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <Link to="/">PORTRADE</Link>
            </div>
            <nav className="footer-nav-bar">
                <Link to="">포트레이드 소개</Link>
                <Link to="">서비스 소개</Link>
                <Link to="">공지사항</Link>
                <Link to="">자주 묻는 질문</Link>
                <Link to="">문의하기</Link>
            </nav>
        </footer>
    );
};

export default Footer;
