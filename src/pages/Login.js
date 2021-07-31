import React from "react";
import "./css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="left-box">
                    <div className="left-text">
                        <Link to="/">
                            <p className="logo-text">PORTRADE</p>
                        </Link>
                        <div className="intro-text">
                            <p>PORTRADE와 함께</p>
                            <p>취업을 향한 여정을 시작해보세요.</p>
                        </div>

                        <div className="slogan-text">
                            <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                            <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                            <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                            <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                        </div>

                        <div className="more-info-text">
                            <Link to="/introduce">플랫폼 더 알아보기 {">"}</Link>
                        </div>

                        <Link to="/register" className="btn-register">
                            회원가입
                        </Link>
                    </div>
                </div>
                <div className="right-box">
                    <div className="login-content">
                        <div className="login-text">로그인</div>
                        <div className="login-intro">
                            <div>포트레이트의 회원이 되시면, 포트폴리오 등록 및 기업 공고 열람</div>
                            <div>서비스를 간편하게 이용하실 수 있습니다.</div>
                        </div>

                        <div className="btn-oauth">Google 계정으로 로그인</div>
                        <div className="login-or-text">or</div>

                        <div className="input-text">
                            이메일 또는 아이디 입력
                            <p>
                                <input className="login-input" type="text" />
                            </p>
                            비밀번호
                            <p>
                                <input className="login-input" type="password" />
                            </p>
                        </div>

                        <div className="btn-login">로그인</div>

                        <div className="btn-option">
                            <div className="save-info">
                                <input className="checkbox" type="checkbox" />
                                아이디 / 비밀번호 저장
                            </div>
                            <div className="find-passwd">비밀번호를 잊으셨나요?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
