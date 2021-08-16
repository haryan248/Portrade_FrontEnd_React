import React, { useEffect } from "react";
import "./css/portfolioModal.css";

const PortfolioModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { openModal, handleModal, header } = props;
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={openModal ? "openModal modal" : "modal"}>
            {openModal ? (
                <div className="portfolioModal-wrapper" section>
                    <button className="portfolioModal-closeButton" onClick={handleModal}>
                        &times;
                    </button>
                    <div className="portfolioModal-header">
                        <div className="portfolioModal-header-leftContent">
                            <div className="portfolioModal-header-title">포트폴리오 제목</div>
                            <div className="portfolioModal-header-title">업로드 날짜</div>
                        </div>
                        <div className="portfolioModal-header-rightContent">
                            <div className="">조회수</div>
                            <div className="">좋아요</div>
                            <div className="">댓글</div>
                        </div>
                    </div>
                    <div className="portfolioModal-content">
                        <div className="portfolioModal-imgContainer"></div>
                    </div>
                    <div className="portfolioModal-closeButton"></div>
                </div>
            ) : null}
        </div>
    );
};
export default PortfolioModal;
