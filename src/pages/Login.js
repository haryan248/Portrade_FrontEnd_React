import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import ActionCreators from "../_actions";
import { useDispatch } from "react-redux";
import Axios from "axios";

import "./css/login.css";

const Login = ({ history }) => {
    const dispatch = useDispatch();

    const config = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };

    const onSuccessGoogle = (res) => {
        // dispatch(ActionCreators.login(res.isSignedIn(), res.Zb.access_token, res.profileObj.email));
        // window.sessionStorage.setItem("access_token", res.Zb.access_token);
        let jwtToken = await Axios.post("http://ec2-3-38-6-25.ap-northeast-2.compute.amazonaws.com:8080/oauth/jwt/google", JSON.stringify(res), config);
        if (jwtToken.status === 200) {
            localStorage.setItem("jwtToken", jwtToken.data);
            history.replace("/");
        }
    };

    const onFailureGoogle = (err) => {
        console.log(err);
    };

    return (
        <div className="login-box">
            <div className="login-left-box">
                <Link to="/" className="login-logo-text">
                    PORTRADE
                </Link>
                <div className="login-intro-text">
                    <p>PORTRADE와 함께</p>
                    <p>취업을 향한 여정을 시작해보세요.</p>
                </div>

                <div className="login-slogan-text">
                    <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                    <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                </div>

                <div className="login-more-info-text">
                    <Link to="/introduce">플랫폼 더 알아보기 &gt;</Link>
                </div>

                <Link to="/register" className="login-btn-register">
                    회원가입
                </Link>
            </div>

            <div className="login-right-box">
                <div className="login-text">로그인</div>
                <div className="login-intro">
                    <div>포트레이트의 회원이 되시면, 포트폴리오 등록 및 기업 공고 열람</div>
                    <div>서비스를 간편하게 이용하실 수 있습니다.</div>
                </div>

                <GoogleLogin
                    clientId="988674118538-gog8quj6fimubp2b8dc6jhecui5e88cd.apps.googleusercontent.com" //앱키 추후 변경
                    onSuccess={(res) => onSuccessGoogle(res)}
                    onFailure={(err) => onFailureGoogle(err)}
                    cookiePolicy="none"
                    className="google-login"
                    buttonText="Google 계정으로 로그인"
                />

                <div className="login-or-text">
                    <span>or</span>
                </div>

                <fieldset className="login-fieldset">
                    <legend>이메일 또는 아이디 입력</legend>
                    <input className="login-input" type="text" />
                </fieldset>
                <fieldset className="login-fieldset">
                    <legend>비밀번호</legend>
                    <input className="login-input" type="password" />
                </fieldset>

                <div className="btn-login">로그인</div>

                <div className="login-option">
                    <div>
                        <input type="checkbox" id="login-info-save" />
                        <label htmlFor="login-info-save" className="login-info-save">
                            아이디 / 비밀번호 저장
                        </label>
                    </div>

                    <p className="login-find-pw">비밀번호를 잊으셨나요?</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
