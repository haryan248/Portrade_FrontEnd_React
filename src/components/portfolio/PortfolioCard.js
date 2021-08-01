import React from "react";

import "./css/portfolioCard.css";

const PortfolioCard = () => {
    return (
        <div className="card-list">
            <div className="card">
                <div className="thumbnail"></div>
                <p className="portfolio-title">포트폴리오 제목</p>
                <p className="portfolio-author">포트폴리오 제작자</p>
                <p className="upload-date">업로드 날짜와 시각(20XX-XX-XX)</p>
            </div>
            <div className="card">
                <div className="thumbnail"></div>
                <p className="portfolio-title">포트폴리오 제목</p>
                <p className="portfolio-author">포트폴리오 제작자</p>
                <p className="upload-date">업로드 날짜와 시각(20XX-XX-XX)</p>
            </div>
            <div className="card">
                <div className="thumbnail"></div>
                <p className="portfolio-title">포트폴리오 제목</p>
                <p className="portfolio-author">포트폴리오 제작자</p>
                <p className="upload-date">업로드 날짜와 시각(20XX-XX-XX)</p>
            </div>
        </div>
    );
};

export default PortfolioCard;