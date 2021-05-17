import React from "react";
import "./MemBox.css";

function MemBox({ mem: { title, content }, imageFirst }) {
  return (
    <div className="mem-box-wrapper">
      {imageFirst ? (
        <>
          {/* Todo */}
          <div className="image"></div>
          <div className="info">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </div>
        </>
      ) : (
        <>
          {/* Todo */}
          <div className="info">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </div>
          <div className="image"></div>
        </>
      )}
    </div>
  );
}

export default MemBox;
