import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

const Home = () => {
    const [buttons, setNames] = useState([
        { id: 1, text: "포트폴리오 등록하기" },
        { id: 2, text: "분야별 포트폴리오" },
        { id: 3, text: "추천 포트폴리오" },
        { id: 4, text: "공지사항" },
        { id: 5, text: "문의하기" },
    ]);

    const homeButtonList = buttons.map((button) => {
        switch(button.id){
            case 1:
                return (
                    <Link to="/portfolio/register" className="home-button" key={button.id}>
                        {button.text}
                    </Link>
                );
            case 4:
                return (
                    <Link to="/notice" className="home-button" key={button.id}>
                        {button.text}
                    </Link>
                );
            case 5:
                return (
                    <Link to="/FAQ" className="home-button" key={button.id}>
                        {button.text}
                    </Link>
                );
            default:
                return (
                    <div className="home-button" key={button.id}>
                        {button.text}
                    </div>
                )

        }
    });

    return (
        <div className="home-container">
            <div className="home-slide-box">슬라이드</div>
            <div className="home-homeTop-button">{homeButtonList}</div>
            <div className="home-corporate-wrap">
                <div className="home-corporate">
                    <div className="home-announcement"></div>
                    <div className="home-newsfeed">
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                    </div>
                </div>
                <div className="home-corporate">
                    <div className="home-announcement"></div>
                    <div className="home-newsfeed">
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                    </div>
                </div>
                <div className="home-corporate">
                    <div className="home-announcement"></div>
                    <div className="home-newsfeed">
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                    </div>
                </div>
                <div className="home-corporate">
                    <div className="home-announcement"></div>
                    <div className="home-newsfeed">
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                        <br />
                        뉴스피드 텍스트입니다.
                    </div>
                </div>
            </div>

            <div className="home-about-box">
                <div className="home-about-yellow-box"></div>

                <div className="home-about-content">
                    <div className="home-about">ABOUT</div>
                    <div className="home-about-title">PORTRADE</div>
                    <div className="home-about-desc">
                        <div className="home-about-subtitle">
                            {" "}
                            'PORTFOLIO' + 'TRADE'
                        </div>
                        <div>
                            {" "}
                            포트레이트는 '포트폴리오(Portfolio)'와
                            '트레이드(Trade)'를 결합한 합성어 입니다.
                        </div>
                        <div>
                            {" "}
                            포트폴리오는 개인마다 다른 이야기를 가지고 있습니다.
                            각자의 개성은 작성자의 얼굴을 대변하기도 합니다.
                        </div>
                    </div>
                    <div className="home-detail-btn">플랫폼 자세히 보기</div>
                </div>
            </div>

            <div className="home-howTo-box">
                <div className="home-howTo-title">How To?</div>
                <div className="home-howTo-desc">
                    포트폴리오 등록은 어떻게 진행되나요?
                </div>
                <div className="home-howTo-detail">
                    <div>
                        포트레이트는 파일 업로드를 통하여 간편한 등록이
                        가능합니다.{" "}
                    </div>
                    <div>여러분의 개성넘치는 포트폴리오를 업로드 해보세요.</div>
                </div>
            </div>

            <div className="home-slogan-yellow">
                <div className="home-slogan-yellow-box"></div>
                <div className="home-slogan-yellow-box"></div>
                <div className="home-slogan-yellow-box"></div>
            </div>

            <div className="home-register-button">등록하기</div>

            <div className="home-adv-content">
                <div className="home-first-adv">
                    <div className="home-portfolioEx-title">
                        <span className="home-focus">PORTRADE</span>는 취업난
                        속에서 기업과 청년의 연결을 도모합니다.
                    </div>
                    <div className="home-portfolioEx-desc">
                        <div>
                            {" "}
                            포트레이트를 이용한 사례 포트레이트를 이용한 사례
                        </div>
                        <div>
                            {" "}
                            포트레이트를 이용한 사례 포트레이트를 이용한 사례
                        </div>
                        <div>
                            {" "}
                            포트레이트를 이용한 사례 포트레이트를 이용한 사례
                        </div>
                    </div>
                </div>

                <div className="home-second-adv">
                    <div className="home-portfolioEx-title">
                        <span className="home-focus">000,000</span> 명이
                        PORTRADE와 함께합니다.
                    </div>
                    <div className="home-portfolioEx-desc">
                        <div>
                            {" "}
                            포트레이트는 '포폴리오(Portfolio)'와
                            '트레이드(Trade)'를 결합한 합성어 입니다.
                        </div>
                        <div>
                            {" "}
                            포트레이트는 '포폴리오(Portfolio)'와
                            '트레이드(Trade)'를 결합한 합성어 입니다.
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-portfolio-content">
                <div className="home-portfolio-nav">포트폴리오</div>
                <div className="home-portfolio-list">
                    <div className="home-portfolio">
                        <div className="home-portfolio-thumbnail"></div>
                        <div className="home-portfolio-title">
                            포트폴리오 제목
                        </div>
                        <div className="home-portfolio-username">
                            포트폴리오 제작사
                        </div>
                        <div className="home-portfolio-time">
                            업로드 날짜와 시각(20XX-XX-XX)
                        </div>
                    </div>
                    <div className="home-portfolio">
                        <div className="home-portfolio-thumbnail"></div>
                        <div className="home-portfolio-title">
                            포트폴리오 제목
                        </div>
                        <div className="home-portfolio-username">
                            포트폴리오 제작사
                        </div>
                        <div className="home-portfolio-time">
                            업로드 날짜와 시각(20XX-XX-XX)
                        </div>
                    </div>
                    <div className="home-portfolio">
                        <div className="home-portfolio-thumbnail"></div>
                        <div className="home-portfolio-title">
                            포트폴리오 제목
                        </div>
                        <div className="home-portfolio-username">
                            포트폴리오 제작사
                        </div>
                        <div className="home-portfolio-time">
                            업로드 날짜와 시각(20XX-XX-XX)
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-start-box">
                <div className="home-description">
                    <div>커리어 성장의 여정을 포트레이트에서 시작해보세요.</div>
                    <div>포트레이드는 여러분과 함께 성장합니다.</div>
                </div>
                <div className="home-start-btn">
                    <div>지금 시작하기</div>
                </div>
            </div>

            <div className="home-info-wrap">
                <div className="home-info-content">
                    <p>NOTICE</p>
                    <div className="home-info-line"></div>
                    <p>
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업
                        준비생에게 도움을 줄 수 있는 사이트를 개발 <br />
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업
                        준비생에게 도움을 줄 수 있는 사이트를 개발
                    </p>
                </div>
                <div className="home-info-content">
                    <p>FAQ</p>
                    <div className="home-info-line"></div>
                    <p>
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업
                        준비생에게 도움을 줄 수 있는 사이트를 개발 <br />
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업
                        준비생에게 도움을 줄 수 있는 사이트를 개발
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
