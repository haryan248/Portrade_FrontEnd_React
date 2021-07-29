import React from "react";
import "./css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <h1>Login</h1>
            <div className="square">
                <div className="intro-text">
                    <p style={{ fontSize: "50px", color: "#005FFF", marginBottom: "100px" }}>PORTRADE</p>
                    <div style={{ fontSize: "35px", color: "#FFF", marginBottom: "100px" }}>
                        <p>PORTRADE와 함께</p>
                        <p>취업을 향한 여정을 시작해보세요.</p>
                    </div>

                    <div style={{ fontSize: "15px", color: "#FFF", marginBottom: "100px" }}>
                        <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                        <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                        <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                        <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                    </div>

                    <div style={{ fontSize: "13px", color: "#FFF", marginBottom: "100px" }}>
                        <Link to="/introduce">플랫폼 더 알아보기 {">"}</Link>
                    </div>

                    <div className="btn-register">
                        <Link to="/register">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
