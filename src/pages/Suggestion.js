import React from "react";
import "./css/suggestion.css";

const Suggestion = () => {
    return (
        <div>
            <div className="suggestion-header">
                <p>추천 기업입니다.</p>
                <p>
                    취업의 기회를 여러분에게
                    <br />
                    포트레이트에서 간편하게 기업 공고를 열람해 보세요.
                </p>
                <p>자세히 보기</p>
            </div>
            <div className="suggestion-company-list">
                <div className="company">추천 기업 예시</div>
                <div className="focus-company">추천 기업 예시</div>
                <div className="company">추천 기업 예시</div>
            </div>
        </div>
    ); 
};

export default Suggestion;
