import React from "react";
import "./css/help.css";

const Help = () => {
    return (
        <div className="help-container">
            <p className="help-question-text">포트레이드에 궁금하신 점이 있으신가요?</p>
            <input className="help-question-box" type="text" placeholder="이 곳에 검색어를 입력하세요"/>
            
            <div className="help-desc-container">
                <div className="help-desc">
                    <p>회원 정보 관리</p>
                    <p>회원 정보 변경</p>
                    <p>아이디 / 비밀번호 찾기</p>
                </div>

                <div className="help-desc">
                    <p>포트폴리오 관리</p>
                    <p>내 포트폴리오 관리</p>
                    <p>포트폴리오 열람 기록</p>
                </div>
            </div>

            <div className="help-notice-box">
                <div className="help-notice">
                    <div className="help-notice-title">
                        <span>공지사항</span>
                        <span>더보기</span>
                    </div>
                    <div className="help-notice-desc">
                        <p>포트레이트의 이용약관에 대해서 안내드립니다.</p>
                        <p>포트레이트의 이용약관 개정에 대해서 안내드립니다.</p>
                        <p>고객센터 운영 시간 안내</p>
                        <p>포트레이트 서비스 런칭 안내</p>
                        <p>포트레이트</p>
                    </div>
                </div>

                <div className="help-notice">
                    <div className="help-notice-title">
                        <span>자주 묻는 질문</span>
                        <span>더보기</span>
                    </div>
                    <div className="help-notice-desc">
                        <p>포트폴리오 업로드는 어떻게 하나요?</p>
                        <p>포트폴리오를 비공개로 전환하고 싶어요.</p>
                        <p>포트폴리오를 암호화해서 공유하고 싶어요.</p>
                        <p>게시물에서 개인 사이트 링크 연결은 어떻게 하나요?</p>
                        <p>아이디 혹은 비밀번호를 잊었습니다.</p>
                    </div>
                </div>
            </div>

            <div className="help-banner">배너</div>

            <div className="help-service-container">
                <p>서비스 소개</p>
                <div className="help-service-content">
                    <div className="help-service">
                        <div></div>
                        <p>포트폴리오 업로드</p>
                    </div>
                    <div className="help-service">
                        <div></div>
                        <p>포트폴리오 암호화</p>
                    </div>
                    <div className="help-service">
                        <div></div>
                        <p>외부 사이트 연동</p>
                    </div>
                    <div className="help-service">
                        <div></div>
                        <p>포트폴리오 업로드</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
