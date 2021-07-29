import React from "react";
import "./css/help.css";

const Help = () => {
    return (
        <div className="help-container">
            <div className="question-content">
                <div className="question-text">
                    <div>포트레이드에 궁금하신 점이 있으신가요?</div>
                </div>
                <div className="question-box"></div>
            </div>

            <div className="notice-box">
                <div className="notice-content">
                    <div className="notice-title">공지사항</div>
                    <div className="notice-desc">
                        <div> 포트레이트의 이용약관에 대해서 안내드립니다.</div>
                        <div> 포트레이트의 이용약관 개정에 대해서 안내드립니다.</div>
                        <div> 고객센터 운영 시간 안내</div>
                        <div> 포트레이트 서비스 런칭 안내</div>
                        <div> 포트레이트</div>
                    </div>
                </div>

                <div className="faq-content">
                    <div className="faq-title">자주 묻는 질문</div>
                    <div className="faq-desc">
                        <div> 포트폴리오 업로드는 어떻게 하나요?</div>
                        <div> 포트폴리오를 비공개로 전환하고 싶어요.</div>
                        <div> 포트폴리오를 암호화해서 공유하고 싶어요.</div>
                        <div> 게시물에서 개인 사이트 링크 연결은 어떻게 하나요?</div>
                        <div> 아이디 혹은 비밀번호를 잊었습니다.</div>
                    </div>
                </div>
            </div>
            <div className="banner">배너</div>

            <div className="serviceIntro-box">
                <div className="serviceIntro">서비스 소개</div>
                <div className="serviceIntro-content">
                    <div className="service"></div>
                    <div className="service"></div>
                    <div className="service"></div>
                    <div className="service"></div>
                </div>
            </div>
            <div className="inquiry-box">
                <div className="description">
                    <div>원하는 답변을 찾기 어려우신가요?</div>
                    <div>링커벨에게 직접 문의 해주세요.</div>
                    <div>최대한 빠르게 답변드리도록 하겠습니다!</div>
                </div>
                <div className="inquiry-btn">
                    <div>문의하기</div>
                </div>
            </div>
        </div>
    );
};

export default Help;
