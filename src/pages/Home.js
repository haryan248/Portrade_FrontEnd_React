import React from "react";
import { Introduce, Notice, Recommand, Review, Thumbnail } from "../components/home";

const Home = () => {
    return (
        <div style={{
            width: "100%",
            textAlign: "center"
        }}>
           <Introduce/>
           <Thumbnail/>
           <Review/>
           <Recommand/>
           <Notice/>
        </div>
    );
};

export default Home;