import React from "react";
import { Link } from "react-router-dom";
import "./css/myPage.css";

const Mypage = () => {
    return (
        <div className="myPage-container">
            <div className="ProfileBanner-root Profile-banner">
                <div className="ProfileBanner-promptContainer">
                    <div className="ProfileBanner-prompt"></div>
                </div>
            </div>
            <div className="Profile-root">
                <div className="Profile-wrap">
                    {/* 프로필 카드 */}
                    <div className="ProfileCard-root">
                        <div className="ProfileCard-header">
                            <div className="Avatar-container">
                                <div className="ProfileAddStoryButton-container">
                                    <div className="AddStoryButton-addStoryIcon"></div>
                                </div>
                            </div>
                            <h1 className="ProfileCard-userFullName">홍길동</h1>
                            <div className="ProfileCard-userDetails">사용자 소속 및 구직 상태</div>
                        </div>

                        <div className="ProfileCard-userInteractions">
                            <div className="ProfileCard-interactionButton">
                                <div>
                                    <div className="ProfileCard-buttonLabel">내 프로필 편집</div>
                                </div>
                            </div>
                            <div className="ProfileCard-interactionButton">
                                <div className="ProfileCard-buttonLabel">
                                    <div> 구직 상태 편집 </div>
                                </div>
                            </div>
                            <div className="ProfileCard-interactionButton">
                                <div className="ProfileCard-buttonLabel">
                                    <div>포트폴리오 관리 </div>
                                </div>
                            </div>
                            <div className="ProfileCard-interactionButton">
                                <div className="ProfileCard-signUpDate">멤버 가입일 : 2021년 1월 1일</div>
                            </div>
                        </div>
                    </div>
                    {/* 프로필 컨텐츠 */}
                    <div className="Profile-profileContents">
                        <ul className="Profile-tabControl Profile-tabsWithBannerWithoutFeatures">
                            <li className="Profile-tab">
                                <Link to="" className="Profile-anchor">
                                    포트폴리오 등록
                                </Link>
                            </li>
                            <li className="Profile-tab">
                                <Link to="" className="Profile-anchor">
                                    나의 포트폴리오
                                </Link>
                            </li>
                            <li className="Profile-tab">
                                <Link to="" className="Profile-anchor">
                                    평가
                                </Link>
                            </li>
                            <li className="Profile-tab">
                                <Link to="" className="Profile-anchor">
                                    저장된 항목
                                </Link>
                            </li>
                            <li className="Profile-tab">
                                <Link to="" className="Profile-anchor">
                                    구독관리
                                </Link>
                            </li>
                        </ul>
                        <div className="Profile-tabs">
                            <div className="Profile-tab">
                                <div>
                                    <div className="Work">
                                        <div className="portfolioAddContent-info">
                                            <div className="portfolioAddContent-card">
                                                <div className="portfolioAddContent-wrapper">
                                                    <div className="box">
                                                        <div className="portfolioAddContent-card__item">
                                                            <div className="portfolioAddContent-icon-wrapper">
                                                                <div className="portfolioAddContent-icon"></div>
                                                            </div>
                                                            <div className="addPortfolio-wrapper">
                                                                <div className="addPortfolio-button">
                                                                    <div className="addPortfolio">포트폴리오 등록</div>
                                                                </div>
                                                            </div>
                                                            <p className="paragraph">
                                                                피드백, 조회수 및 평가를 받아 보십시오.<br></br> 공개 프로젝트는 당사의 큐레이터가 추천해 드릴 수 있습니다.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
