import React, { useState } from "react";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import PortfolioModal from "../components/portfolio/PortfolioModal";

import "./css/portfolio.css";

const Portfolio = () => {
    const [name, setName] = useState([
        { id: 1, text: "포트폴리오 등록" },
        { id: 2, text: "분야" },
        { id: 3, text: "포트폴리오 관리" },
        { id: 4, text: "샘플 다운로드" },
        { id: 5, text: "제작자 찾기" },
    ]);

    const [category, setCategory] = useState([
        { id: 1, text: "전체" },
        { id: 2, text: "개발 / 프로그래밍" },
        { id: 3, text: "보안 / 네트워크" },
        { id: 4, text: "데이터 사이언스" },
        { id: 5, text: "마케팅" },
        { id: 6, text: "뷰티" },
        { id: 7, text: "미술" },
        { id: 8, text: "음악" },
        { id: 9, text: "기타 소분야" },
    ]);

    const [portfolio, setPortfolio] = useState([
        { id: 1, name: "추천 포트폴리오", detail: "포트폴리오 더보기" },
        { id: 2, name: "최신 포트폴리오", detail: "포트폴리오 더보기" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
        // 모달 오버레이에서 스크롤 방지
        if (!isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };
    const PortfolioButtonList = name.map((name) => (
        <div className="portfolio-options-button" key={name.id}>
            {name.text}
        </div>
    ));

    const CategoryButtonList = category.map((category) => (
        <div className="portfolio-category-button" key={category.id}>
            {category.text}
        </div>
    ));

    const CategoryList = category.map((category) => (
        <span className="portfolio-category-list" key={category.id}>
            {category.text}
        </span>
    ));

    const PortfolioList = portfolio.map((portfolio) => (
        <div className="portfolio-suggestion" key={portfolio.id}>
            <div className="section-header">
                <p className="portfolio-section-name">{portfolio.name}</p>
                <p className="portfolio-section-detail">{portfolio.detail}</p>
            </div>
            <div onClick={handleModal}>
                <PortfolioCard />
            </div>
        </div>
    ));

    return (
        <>
            <div className="portfolio-header">
                <div className="portfolio-desc">
                    <p>
                        어떤 분야의 <br /> 포트폴리오를 등록하시나요?
                    </p>
                    <p>
                        포트레이트는 다양한 분야의 포트폴리오를 등록 할 수 있습니다.
                        <br />
                        여러분의 개성 넘치는 포트폴리오를 등록해보세요.
                    </p>
                    <p>등록하기</p>
                </div>
                <div className="portfolio-desc-box">예시</div>
            </div>
            <div className="portfolio-sort">
                <p className="portfolio-section-name">정렬 기준</p>
                <form>
                    <input type="text" placeholder="포트폴리오 검색" />
                    <label htmlFor="category">분야 ▽</label>
                    <input type="checkbox" id="category" />
                    <label htmlFor="order-asc">가나다순 ▽</label>
                    <input type="checkbox" id="order-asc" />
                    <label htmlFor="lookup">조회순 ▽</label>
                    <input type="checkbox" id="lookup" />
                </form>

                <div className="portfolio-options-button-wrap">{PortfolioButtonList}</div>
            </div>
            <div>{PortfolioList}</div>
            <PortfolioModal openModal={isModalOpen} handleModal={handleModal} />

            <div className="portfolio-category">
                <div className="portfolio-category-header">
                    <p>분야별 포트폴리오 탐색</p>
                    <div className="portfolio-category-button-wrap">{CategoryButtonList}</div>
                </div>
                <div className="portfolio-category-desc">
                    <p className="portfolio-section-name">분야별 포트폴리오</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>{CategoryList}</div>
                        <p className="portfolio-section-detail">더보기</p>
                    </div>
                    <PortfolioCard />
                    <PortfolioCard />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
