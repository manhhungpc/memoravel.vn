import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-wapper">
      {/* ví dụ về dùng logo */}
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <div className="navbar">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Meminfo
          </a>
          <a href="#" className="nav-link">
            Memdraw
          </a>
          <a href="#" className="nav-link">
            Memoravel
          </a>
          <a href="#" className="nav-link">
            Shop
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
        </div>
      </div>

      {/* Write code here */}
    </div>
  );
}

export default Menu;

// Mọi ảnh trong mọi component, em muốn lấy src
// để hiển thị thì đều lấy từ "/", ví dụ "/logo.svg"
