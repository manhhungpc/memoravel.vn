import React from "react";
import "./MemBox.css";

function MemBox({ mem: { title, content }, imageFirst }) {
  return (
    <div className="mem-box-wrapper">
      {imageFirst ? (
        <>
          {/* Todo */}
          <div className="container">
            <div className="infoRight">
              <div className="dash"></div>
              <span className="header-memBox">HIKING ESSENTIALS</span>
              <div className="title">{title}</div>
              <p className="content">{content}</p>
              <a href="#">Read more</a>
            </div>
            <div className="imgBox img-first">
              <img src="/mem-box-1.jpg" alt="demo-imageFirst" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Todo */}
          <div className="container">
            <div className="infoLeft">
              <div className="dash"></div>
              <span className="header-memBox">GET STARTED</span>
              <div className="title">{title}</div>
              <div className="content">{content}</div>
              <a href="#">Read more</a>
            </div>
            <div className="imgBox img-second">
              <img src="/mem-box-2.jpg" alt="demo-imageSecond" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MemBox;
