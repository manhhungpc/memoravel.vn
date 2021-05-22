import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footers">
      <div className="memoravel-infor">
        <div className="title-footer infor-footer">
          <div style={{ fontSize: "22px" }}>MEMORAVEL</div>
          <p style={{ width: "250px" }}>
            Get out there &amp; discover your next slope, mountain &amp; destination!
          </p>
        </div>
        <small className="copyright">Copyright 2021 MEMORAVEL, Inc. Terms &amp; Privacy</small>
      </div>
      <div className="memoravel-link">
        <div className="title-footer-link">More on the blog</div>
        <ul>
          <li className="link-to-page">
            <a href="#">About MEMORAVEL</a>
          </li>
          <li className="link-to-page">
            <a href="#">Contributors &amp; Writers</a>
          </li>
          <li className="link-to-page">
            <a href="#">Write for us</a>
          </li>
          <li className="link-to-page">
            <a href="#">Contact us</a>
          </li>
          <li className="link-to-page">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="memoravel-link">
        <div className="title-footer-link">More on MEMORAVEL</div>
        <ul>
          <li className="link-to-page">
            <a href="#">The Team</a>
          </li>
          <li className="link-to-page">
            <a href="#">Jobs</a>
          </li>
          <li className="link-to-page">
            <a href="#">Press</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
