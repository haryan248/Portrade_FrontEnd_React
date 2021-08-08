import React from "react";

import "./css/insertPortfolio.css";

const InsertPortfolio = () => {
    return (
        <div className="mypage-insert-portfolio-box">
            <div className="mypage-portfolio-addContent-icon-wrapper">
                <div className="mypage-portfolio-addContent-icon">+</div>
            </div>
           
            <p className="mypage-addPortfolio-content">포트폴리오 등록</p>

            <p className="paragraph">
                피드백, 조회수 및 평가를 받아 보십시오.
                <br/>
                공개 프로젝트는 당사의 큐레이터가 추천해 드릴 수 있습니다.
            </p>
        </div>
    );
};

export default InsertPortfolio;