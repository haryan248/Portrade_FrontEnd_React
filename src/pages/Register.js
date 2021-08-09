import React from "react";
import { Link } from "react-router-dom";
import "./css/register.css";

const Register = () => {
    return (
        <div className="register-box">
            <div className="register-left-box">
                <div className="register-text">포트레이드 가입하기</div>
                <div className="register-intro">
                    <div>포트레이트의 회원이시라면, 포트폴리오 등록 및 기업 공고 열람 서비스를 간편하게 이용하실 수 있습니다.</div>
                </div>

                <fieldset className="register-fieldset">
                    <legend>이메일 또는 아이디 입력</legend>
                    <input className="register-input" type="text" />
                </fieldset>
                <fieldset className="register-fieldset">
                    <legend>비밀번호</legend>
                    <input className="register-input" type="password" />
                </fieldset>
                <div className="password-option">
                    <div>
                        <label className="password-info">* 영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 6자 이상 입력해 주세요</label>
                    </div>
                </div>
                <fieldset className="register-fieldset">
                    <legend>비밀번호</legend>
                    <input className="register-input" type="password" />
                </fieldset>
                <div className="agree-option">
                    <div>
                        <div>
                            <input type="checkbox" id="login-info-agree" />
                            <label htmlFor="login-info-agree" className="login-info-agree">
                                포트레이트 가입 약관에 모두 동의 합니다.
                            </label>
                        </div>
                        <div className="login-agree-content">스터닝 이용약관(필수), 개인정보취급방침(필수), 마케팅정보 수집동의(선택)</div>
                    </div>
                </div>

                <div className="btn-register">회원가입</div>
            </div>

            <div className="register-right-box">
                <Link to="/" className="register-logo-text">
                    PORTRADE
                </Link>
                <div className="register-intro-text">
                    <p>PORTRADE와 함께</p>
                    <p>취업을 향한 여정을 시작해보세요.</p>
                </div>

                <div className="register-slogan-text">
                    <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                    <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                </div>

                <div className="register-more-info-text">
                    <Link to="/introduce">플랫폼 더 알아보기 &gt;</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
