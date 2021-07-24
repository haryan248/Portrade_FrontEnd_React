import React from "react";
import "./css/home.css";

const Home = () => {
    return (
        <div style={{width: "100%", textAlign: "center"}}>
            <h1>Home</h1>
            
            <div className="slide-box">
                슬라이드
            </div>

            <div className="banner-box" style={{marginTop:"20px"}}>
                배너
            </div>

            <div className="about-box" style={{display:"flex", color:"#707070", lineHeight:"1px"}}>
                <div>
                    <p style={{fontSize:"15px"}}>ABOUT</p>
                    <p style={{fontSize:"40px"}}>PORTRADE</p>
                    <p style={{fontSize:"17px"}}>'PORTFOLIO' + 'TRADE'</p>

                    <br />

                    <p style={{fontSize:"17px"}}> 포트레이트는 '포트폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</p>
                    <p style={{fontSize:"17px"}}>포트폴리오는 개인마다 다른 이야기를 가지고 있습니다. 각자의 개성은 작성자의 얼굴을 대변하기도 합니다.</p>
                    
                    <br />
                    
                    <p style={{fontSize:"15px"}}>플랫폼 자세히 보기</p>
                </div>
                
                <div className="about-yellow-box"></div>
            </div>

            <div className="content-box" style={{marginTop:"100px"}}>
                <div style={{fontSize:"40px"}}>OUR CONTENT</div>
                <div style={{fontSize:"15px"}}>포트폴리오 업로드 및 이력서 열람</div>
                <div className="content-yellow-box" style={{marginTop:"50px"}}></div>
            </div>

            <div className="content-text">
                <div>포트레이트는 '포트폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                <div>포트레이트는 '포트폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
                <div>포트레이트는 '포트폴리오(Portfolio)'와 '트레이드(Trade)'를 결합한 합성어 입니다.</div>
            </div>

            <div className="slogan-box" style={{marginTop:"100px"}}>
                <div style={{fontSize:"40px"}}>PORTRADE는 취업난 속에서</div>
                <div style={{fontSize:"40px"}}>기업과 청년의 연결을 도모합니다.</div>
            </div>

            <div className="slogan-yellow">
                <div className="slogan-yellow-box"></div>
                <div className="slogan-yellow-box"></div>
                <div className="slogan-yellow-box"></div>
            </div>

            <div className="start-box" style={{marginTop:"100px"}}>
                <div style={{fontSize:"40px"}}>커리어 성장의 여정을 지금 포트레이트에서</div>
                <div style={{fontSize:"40px"}}>시작해보세요.</div>
            </div>

            <div className="start-btn">
            </div>

        </div>
    );
};

export default Home;