import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./css/home.css";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: "linear",
    };
    const [buttons, setNames] = useState([
        { id: 1, text: "포트폴리오 등록하기" },
        { id: 2, text: "분야별 포트폴리오" },
        { id: 3, text: "추천 포트폴리오" },
        { id: 4, text: "공지사항" },
        { id: 5, text: "문의하기" },
    ]);

    const [slogans, setSlogans] = useState([
        { id: 1, imgUrl: require("../images/home/slogan_1.png").default, text: "포트폴리오 JPG 변환" },
        { id: 2, imgUrl: require("../images/home/slogan_2.png").default, text: "포트폴리오 업로드" },
        { id: 3, imgUrl: require("../images/home/slogan_3.png").default, text: "설명과 세부 내용 추가 및 SNS 연동" },
    ]);
    const [carousels, setCarousels] = useState([
        {
            id: 1,
            imgUrl: require("../images/home/main_image_1.png").default,
            bgColor: "#76ABE7",
            textColor: "#FFFFFF",
            title: "포트레이드는 <br/> 간편한 포트폴리오 등록",
            detail: "누구에게나 손쉽고,<br/>누구에게나 편리하게<br/>포트폴리오를 등록하실 수 있습니다.",
        },
        {
            id: 2,
            imgUrl: require("../images/home/main_image_2.png").default,
            bgColor: "#FFD5D5",
            textColor: "#000000",
            title: "포트레이드는 더 나은 미래와<br/> 청년의 성장을 위해 노력합니다.",
            detail: "분야와 상관 없이 청년들의 꿈을 이룰 수 있도록,<br/>포트레이트는 여러분을 도와드립니다.",
        },
    ]);
    const homeButtonList = buttons.map((button) => {
        switch (button.id) {
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
                );
        }
    });

    const SloganList = slogans.map((slogan) => (
        <div className="home-slogan-box" key={slogan.id}>
            <div className="home-slogan-container">
                <img className="home-slogan-img" src={slogan.imgUrl}></img>
                <div className="home-slogan-text">
                    <div>{slogan.id} 단계</div>
                    <div>{slogan.text}</div>
                </div>
            </div>
        </div>
    ));

    const CarouselList = carousels.map((carousel) => (
        <div key={carousel.id}>
            <div className="home-carousel-box" style={{ backgroundColor: carousel.bgColor }}>
                <div className="home-carousel-container">
                    <div style={{ color: carousel.textColor }}>
                        <div className="home-carousel-title" dangerouslySetInnerHTML={{ __html: carousel.title }}></div>
                        <div className="home-carousel-detail" dangerouslySetInnerHTML={{ __html: carousel.detail }}></div>
                    </div>
                    <img className="home-carousel-img" src={carousel.imgUrl}></img>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="home-container">
            <div className="home-slide-box">
                <Slider {...settings}>{CarouselList}</Slider>
            </div>
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
                        <div className="home-about-subtitle"> 'PORTFOLIO' + 'TRADE'</div>
                        <div> 포트레이트는 '포트폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                        <br />
                        <div>코로나 19로 인해, 더욱 치열해진 취업 난 속에서 청년을 도와주는 사이트 입니다.</div>
                        <div>포트폴리오에는 개인의 개성과 열정이 담겨져 있습니다. 이런 개성이 담긴 작품은 한 사람을 대변합니다.</div>
                        <div>포트레이트는 여러분의 개성이 담긴 포트폴리오를 화가의 혼이 담긴 초상화처럼 여깁니다. 여러분의 소중한 초상화를 기업에게 전달해드리겠습니다.</div>
                    </div>
                    <Link to="/introduce">
                        <div className="home-detail-btn">플랫폼 자세히 보기</div>
                    </Link>
                </div>
            </div>
            <div className="home-howTo-box">
                <div className="home-howTo-title">How To?</div>
                <div className="home-howTo-desc">포트폴리오 등록은 어떻게 진행되나요?</div>
                <div className="home-howTo-detail">
                    <div>포트레이트는 파일 업로드를 통하여 간편한 등록이 가능합니다. </div>
                    <div>여러분의 개성넘치는 포트폴리오를 업로드 해보세요.</div>
                </div>
            </div>
            <div className="home-slogan">{SloganList}</div>
            <Link to="/portfolio/register">
                <div className="home-register-button">등록하기</div>
            </Link>
            <div className="home-adv-content">
                <div className="home-first-adv">
                    <div className="home-portfolioEx-title">
                        <span className="home-focus">PORTRADE</span>는 취업난 속에서 기업과 청년의 연결을 도모합니다.
                    </div>
                    <div className="home-portfolioEx-desc">
                        <div> 포트레이트를 이용한 사례 포트레이트를 이용한 사례</div>
                        <div> 포트레이트를 이용한 사례 포트레이트를 이용한 사례</div>
                        <div> 포트레이트를 이용한 사례 포트레이트를 이용한 사례</div>
                    </div>
                </div>

                <div className="home-second-adv">
                    <div className="home-portfolioEx-title">
                        <span className="home-focus">000,000</span> 명이 PORTRADE와 함께합니다.
                    </div>
                    <div className="home-portfolioEx-desc">
                        <div> 포트레이트는 '포폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                        <div> 포트레이트는 '포폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                    </div>
                </div>
            </div>
            <div className="home-portfolio-content">
                <div className="home-portfolio-nav">포트폴리오</div>
                <div className="home-portfolio-list">
                    <div className="home-portfolio">
                        <div className="home-portfolio-thumbnail"></div>
                        <div className="home-portfolio-title">포트폴리오 제목</div>
                        <div className="home-portfolio-username">포트폴리오 제작사</div>
                        <div className="home-portfolio-time">업로드 날짜와 시각(20XX-XX-XX)</div>
                    </div>
                    <div className="home-portfolio">
                        <div className="home-portfolio-thumbnail"></div>
                        <div className="home-portfolio-title">포트폴리오 제목</div>
                        <div className="home-portfolio-username">포트폴리오 제작사</div>
                        <div className="home-portfolio-time">업로드 날짜와 시각(20XX-XX-XX)</div>
                    </div>
                    <div className="home-portfolio">
                        <div className="home-portfolio-thumbnail"></div>
                        <div className="home-portfolio-title">포트폴리오 제목</div>
                        <div className="home-portfolio-username">포트폴리오 제작사</div>
                        <div className="home-portfolio-time">업로드 날짜와 시각(20XX-XX-XX)</div>
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
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업 준비생에게 도움을 줄 수 있는 사이트를 개발 <br />
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업 준비생에게 도움을 줄 수 있는 사이트를 개발
                    </p>
                </div>
                <div className="home-info-content">
                    <p>FAQ</p>
                    <div className="home-info-line"></div>
                    <p>
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업 준비생에게 도움을 줄 수 있는 사이트를 개발 <br />
                        코로나 19 사태로 인해 취업이 어려워진 지금, 취업 준비생에게 도움을 줄 수 있는 사이트를 개발
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
