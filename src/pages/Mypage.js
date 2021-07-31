import React from "react";
import "./css/my-page.css";

const Mypage = () => {
    return (
        <div className="myPage-container">
            <div class="ProfileBanner-root Profile-banner">
                <div className="ProfileBanner-promptContainer">
                    <div className="ProfileBanner-prompt"></div>
                </div>
            </div>
            <div className="Profile-root">
                <div className="Profile-wrap">
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
                            <div className="ProfileCard-interactionButton ProfileCard-editButton">
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
                </div>
                <div className="Profile-profileContents-3cP"></div>
            </div>
        </div>
    );
};

export default Mypage;
