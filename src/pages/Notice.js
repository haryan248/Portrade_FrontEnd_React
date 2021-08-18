import React from "react";
import "./css/notice.css";

const Notice = () => {
    return (
        <div className="notice-wrap">
            <div className="notice-board">
                <p className="notice-text">
                    공지사항
                </p>
                
                <div className="notice-search-wrap">
                    <input className="notice-search-input" type="text" placeholder="  검색어를 입력해주세요"/>
                    <button>search</button>
                </div>

                <div className="notice-category-line"></div>
                <div className="notice-tab-category">
                    <span>NO</span>
                    <span>제목</span>
                    <span>등록일</span>
                </div>
                <div className="notice-category-line"></div>

                <div className="notice-tab-post">
                    <span>no</span>
                    <span>[공지사항 분류] 공지사항 제목입니다.</span>
                    <span>2021-01-01</span>
                </div>
                <div className="notice-tab-post-line"></div>

                <div className="notice-tab-post">
                    <span>no</span>
                    <span>[공지사항 분류] 공지사항 제목입니다.</span>
                    <span>2021-01-01</span>
                </div>
                <div className="notice-tab-post-line"></div>

                <div className="notice-page-btn">
                    <button className="notice-page-prevbtn">&lt;</button>
                    <button className="notice-page-prevbtn">1</button>
                    <button className="notice-page-prevbtn">&gt;</button>
                </div>

            </div>
        </div>
    );
};
export default Notice;