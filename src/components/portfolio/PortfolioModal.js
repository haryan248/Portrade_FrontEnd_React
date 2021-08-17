import React, { useEffect } from "react";
import "./css/portfolioModal.css";

const PortfolioModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { openModal, handleModal, header } = props;
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={openModal ? "openModal modal" : "modal"}>
            {openModal ? (
                <div className="portfolioModal-wrapper">
                    <button className="portfolioModal-closeButton" onClick={handleModal}>
                        &times;
                    </button>
                    <div className="portfolioModal-header">
                        <div className="portfolioModal-header-leftContent">
                            <div className="portfolioModal-header-title">포트폴리오 제목</div>
                            <div className="portfolioModal-header-date">업로드 날짜</div>
                        </div>
                        <div className="portfolioModal-header-rightContent">
                            <div className="">조회수</div>
                            <div className="">좋아요</div>
                            <div className="">댓글</div>
                        </div>
                    </div>
                    <div className="portfolioModal-content">
                        <div className="portfolioModal-imgContainer"></div>
                        <div className="portfolioModal-button-group">
                            <div className="portfolioModal-likeButton">좋아요</div>
                            <div className="portfolioModal-saveButton">저장하기</div>
                        </div>
                        <div className="portfolioModal-profile-content">
                            <div className="portfolioModal-profile">
                                <div className="portfolioModal-profile-Avatar"></div>
                                <div className="portfolioModal-profile-desc">
                                    <div className="portfolioModal-profile-name">포트폴리오 제작자 이름</div>
                                    <div className="portfolioModal-profile-state">직종 및 구직 상태</div>
                                </div>
                                <div className="portfolioModal-profile-followButton">팔로우</div>
                            </div>
                            <div className="portfolioModal-portfolioCardList">
                                <div className="portfolioModal-portfolioCard">
                                    <div className="portfolioModal-thumbnail"></div>
                                </div>
                                <div className="portfolioModal-portfolioCard">
                                    <div className="portfolioModal-thumbnail"></div>
                                </div>
                                <div className="portfolioModal-portfolioCard">
                                    <div className="portfolioModal-thumbnail"></div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioModal-portfolioComment-content">
                            <div className="portfolioModal-writeComment">
                                <div className="portfolioModal-writeComment-profile"></div>
                                <div className="portfolioModal-writeInput">
                                    <textarea className="portfolioModal-InputField" type="text" />
                                </div>
                                <div className="portfolioModal-submitButton"></div>
                            </div>
                            <div className="portfolioModal-commentList">
                                <div className="portfolioModal-comment">
                                    <div className="portfolioModal-comment-profile"></div>
                                    <div className="portfolioModal-comment-text-content">
                                        <div className="portfolioModal-comment-text-name">댓글 사용자 이름</div>
                                        <div className="portfolioModal-comment-text-detail">
                                            댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolioModal-comment">
                                    <div className="portfolioModal-comment-profile"></div>
                                    <div className="portfolioModal-comment-text-content">
                                        <div className="portfolioModal-comment-text-name">댓글 사용자 이름</div>
                                        <div className="portfolioModal-comment-text-detail">
                                            댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolioModal-comment">
                                    <div className="portfolioModal-comment-profile"></div>
                                    <div className="portfolioModal-comment-text-content">
                                        <div className="portfolioModal-comment-text-name">댓글 사용자 이름</div>
                                        <div className="portfolioModal-comment-text-detail">
                                            댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolioModal-comment-moreButton">
                                <div>댓글 더 보기 ↓</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default PortfolioModal;
