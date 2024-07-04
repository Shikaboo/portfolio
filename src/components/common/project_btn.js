import React, { useState } from "react";

export default function PublicBtn() {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleButtonClick = (index) => {
    setActiveBtn(index);
  };

  return (
    <div className="btn_wrap flex">
      {["페이지 링크", "깃허브 링크"].map((text, index) => (
        <div
          key={index}
          className={`public_btn ${activeBtn === index ? "active" : ""}`}
          onClick={() => handleButtonClick(index)}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
