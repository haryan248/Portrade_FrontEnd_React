import React, { useState } from "react";
import PortfolioUpload from "../components/portfolio/PortfolioUpload";

import "./css/portfolioRegister.css";

const PortfolioRegister = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    return (
        <div className="portfolioRegister-container">
            <p className="portfolioRegister-header">포트폴리오 등록하기</p>

            <div className="portfolioRegister">
                <div className="portfolioRegister-add">
                    <p>포트폴리오 파일을 업로드 해보세요</p>
                    <p>지원 파일 형태 : RGB 형식의 JPG</p>
                    <div className="portfolioRegister-img">
                        <button>+</button>
                        <button>+</button>
                        <button>+</button>
                    </div>
                    <p>레이아웃을 선택하세요</p>
                </div>

                <div className="portfolioRegister-options">
                    <div className="portfolioRegister-options-text">
                        <p className="portfolioRegister-options-header">텍스트</p>
                    </div>
                    <div className="portfolioRegister-options-img">
                        <p className="portfolioRegister-options-header">이미지</p>
                    </div>
                    <div className="portfolioRegister-options-video">
                        <p className="portfolioRegister-options-header">비디오</p>
                        <input type="text" placeholder="파일 찾아보기" />
                        <button className="options-btn">적용</button>
                    </div>

                    <div className="portfolioRegister-options-media">
                        <p className="portfolioRegister-options-header">미디어 임베드</p>
                        <input type="text" placeholder="파일 찾아보기" />
                        <button className="options-btn">적용</button>
                    </div>
                </div>
            </div>

            <button className="portfolioRegister-btn" onClick={handleModal}>
                다음 단계
            </button>

            <PortfolioUpload openModal={isModalOpen} handleModal={handleModal} />
        </div>
    );
};

export default PortfolioRegister;
