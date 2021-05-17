import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-wapper">
      {/* ví dụ về dùng logo */}
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Write code here */}
    </div>
  );
}

export default Menu;

// Mọi ảnh trong mọi component, em muốn lấy src
// để hiển thị thì đều lấy từ "/", ví dụ "/logo.svg"
