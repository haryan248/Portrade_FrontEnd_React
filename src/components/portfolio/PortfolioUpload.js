import React from "react";

import "./css/portfolioModal.css";
import "./css/portfolioUpload.css";

const PortfolioUpload = (props) => {
    const { openModal, handleModal } = props;

    return (
        <div className={openModal ? "openModal modal" : "modal"}>
            {openModal ? (
                    <div className="portfolioUpload-container">
                        <div className="portfolioUpload">
                            <div className="portfolioUpload-img">
                                <p className="portfolioUpload-options-header">
                                    포트폴리오 대표이미지
                                    <span>(필수)</span>
                                </p>
                                <div className="portfolioUpload-thumbnail">
                                    <p>RGB형식의 JPG <br/> 대표이미지 최적 치수 413 x 309</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="portfolioUpload-options">
                                <p className="portfolioUpload-options-header">
                                    포트폴리오 제목
                                    <span>(필수)</span>
                                </p>
                                <input type="text" placeholder="포트폴리오 제목을 입력하세요." />
                                
                                <p className="portfolioUpload-options-header">
                                    포트폴리오 설명
                                    <span>(최대 500자)</span>
                                </p>
                                <textarea placeholder="포트폴리오에 대한 추가적인 설명을 추가해보세요." />
                                
                                <p className="portfolioUpload-options-header">공개범위 설정</p>
                                <input type="text" placeholder="모든 사용자" />
                            </div>
                        </div>
                        <button className="portfolioUpload-btn">업로드</button>
                        <button className="portfolioUpload-closebtn" onClick={handleModal}>&times;</button>
                    </div>
            ) : null}
        </div>
    );
};

export default PortfolioUpload;