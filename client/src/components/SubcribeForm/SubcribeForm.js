import React from "react";
import "./SubcribeForm.css";

function SubcribeForm() {
  return (
    <div className="sub-form-wrapper">
      <div className="header-form">MEMORAVEL.VN</div>
      <div className="subcribe-text">Subcribe Form</div>
      <div className="subcribe-input">
        <input className="email-form" placeholder="Email address" type="text" />
        <button className="button-form">Submit</button>
      </div>
    </div>
  );
}

export default SubcribeForm;
