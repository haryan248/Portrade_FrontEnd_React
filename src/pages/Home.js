import React from "react";
import "./css/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="slide-box">슬라이드</div>

            <div className="banner-box">배너</div>

            <div className="about-box">
                <div className="about-yellow-box"></div>

                <div className="about-content">
                    <div className="about">ABOUT</div>
                    <div className="about-title">PORTRADE</div>
                    <div className="about-desc">
                        <div> 'PORTFOLIO' + 'TRADE'</div>
                        <div> 포트레이트는 '포트폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                        <div> 포트폴리오는 개인마다 다른 이야기를 가지고 있습니다. 각자의 개성은 작성자의 얼굴을 대변하기도 합니다.</div>
                    </div>
                    <div className="detail-btn">플랫폼 자세히 보기</div>
                </div>
            </div>

            <div className="howTo-box">
                <div className="howTo-title">How To?</div>
                <div className="howTo-desc">포트폴리오 등록은 어떻게 진행되나요?</div>
                <div className="howTo-detail">
                    <div>포트레이트는 파일 업로드를 통하여 간편한 등록이 가능합니다. </div>
                    <div>여러분의 개성넘치는 포트폴리오를 업로드 해보세요.</div>
                </div>
            </div>

            <div className="slogan-yellow">
                <div className="slogan-yellow-box"></div>
                <div className="slogan-yellow-box"></div>
                <div className="slogan-yellow-box"></div>
            </div>

            <div className="register-button">등록하기</div>

            <div className="adv-content">
                <div className="first-adv">
                    <div className="portfolioEx-title">
                        <span className="focus">PORTRADE</span>는 취업난 속에서 기업과 청년의 연결을 도모합니다.
                    </div>
                    <div className="portfolioEx-desc">
                        <div> 포트레이트를 이용한 사례 포트레이트를 이용한 사례</div>
                        <div> 포트레이트를 이용한 사례 포트레이트를 이용한 사례</div>
                        <div> 포트레이트를 이용한 사례 포트레이트를 이용한 사례</div>
                    </div>
                </div>

                <div className="second-adv">
                    <div className="portfolioEx-title">
                        <span className="focus">000,000</span> 명이 PORTRADE와 함께합니다.
                    </div>
                    <div className="portfolioEx-desc">
                        <div> 포트레이트는 '포폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                        <div> 포트레이트는 '포폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                    </div>
                </div>
            </div>

            <div className="portfolio-content">
                <div className="portfolio-nav">포트폴리오</div>
                <div className="portfolio-list">
                    <div className="portfolio">
                        <div className="portfolio-thumbnail"></div>
                        <div className="portfolio-title">포트폴리오 제목</div>
                        <div className="portfolio-username">포트폴리오 제작사</div>
                        <div className="portfolio-time">업로드 날짜</div>
                    </div>
                    <div className="portfolio">
                        <div className="portfolio-thumbnail"></div>
                        <div className="portfolio-title">포트폴리오 제목</div>
                        <div className="portfolio-username">포트폴리오 제작사</div>
                        <div className="portfolio-time">업로드 날짜</div>
                    </div>
                    <div className="portfolio">
                        <div className="portfolio-thumbnail"></div>
                        <div className="portfolio-title">포트폴리오 제목</div>
                        <div className="portfolio-username">포트폴리오 제작사</div>
                        <div className="portfolio-time">업로드 날짜</div>
                    </div>
                </div>
            </div>

            <div className="start-box">
                <div className="description">
                    <div>커리어 성장의 여정을 포트레이트에서 시작해보세요.</div>
                    <div>포트레이드는 여러분과 함께 성장합니다.</div>
                </div>
                <div className="start-btn">
                    <div>등록하기</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
