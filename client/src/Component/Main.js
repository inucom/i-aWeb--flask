import React from "react";

import "../StyleCSS/Grid.css";

function Main() {
    return (
        <>
            <br/>
            <br/>
        <div className="container">
            <div className="left60"
                 style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                 }}>
            <h1>Team InuAttention</h1>
            <br/>
            <h2>Image2Voice</h2>
            <br/>
            <br/>
            <p>Image2Voice는 <br/>이미지를 분석하여 사용자 개인만의 유일한 음성을 생성하는<br/>서비스를 제공합니다.</p>
            </div>

            <div className="right40">
                <button onClick={() => window.location.href="/register"} className="formbold-browse">Register</button>
                <br/>
                <button onClick={() => window.location.href="/login"} className="formbold-browse">Login</button>
                <br/>
                <button onClick={() => window.location.href="/tutorial"} className="formbold-browse">Tutorial</button>
                <br/>
                <button onClick={() => window.location.href="/faq"} className="formbold-browse">FAQ</button>
                <br/>
            </div>

        </div>
        </>
    );
}

export default Main;
