import React from "react";
import { Link } from "react-router-dom";
import "./css/faq.css";

const FAQ = () => {
    return (
        <div className="faq-wrap">
            <div className="faq-board">          
                <div className="faq-path">
                    <Link to="/">홈</Link>
                    <span>&gt;</span>
                    <Link to="/help">고객센터</Link>
                    <span>&gt;</span>
                    <Link to="/faq">자주 묻는 질문</Link>
                </div>

                <div className="faq-post-wrap">
                    <div className="faq-text">
                        <p> 자주 묻는 질문 </p>
                        <p> 포트레이트에 궁금한 점이 있으신가요? </p>
                        <p> 자주 묻는 질문 FAQ 리스트를 확인해보세요. </p>
                    </div>

                    {/* <div>
                        <div className="faq-post-top">
                            <div className="faq-post-text">포트폴리오 업로드는 어떻게 하나요?</div>
                        </div>
                        <div className="faq-post-bottom">
                            <div className="faq-post-text">추천 기업 탭은 무엇인가요?</div>
                        </div>
                    </div> */}

                    <div className="faq-post-block">
                        <span>
                            <div className="faq-post-text">포트폴리오 업로드는 어떻게 하나요?</div>
                        </span>
                        <span>
                            <div className="faq-post-text">포트폴리오를 비공개로 전환하고 싶어요.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">포트폴리오를 암호화해서 공유하고 싶어요.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">게시물에서 개인 사이트 링크 연결은 어떻게 하나요?</div>
                        </span>
                        <span>
                            <div className="faq-post-text">아이디 혹은 비밀번호를 잊었습니다.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">이메일을 변경하고 싶어요.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">다른 사람의 포트폴리오를 저장하고 싶어요.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">팔로우 관리를 하고싶어요.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">다른 사람의 포트폴리오를 저장하고 싶어요.</div>
                        </span>
                        <span>
                            <div className="faq-post-text">포트폴리오 평가 기록은 어디서 볼 수 있나요?</div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="faq-help-wrap">
                <div className="faq-help-text">
                    <span>원하는 답변을 찾기 어려우신가요?</span>
                    <span>링커벨에게 직접 문의 해주세요</span>
                    <span>최대한 빠르게 도와드리겠습니다!</span>
                    <div className="faq-help-btn">
                        <button><p>1:1 문의 하기</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FAQ;