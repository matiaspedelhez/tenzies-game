import React from "react";
import "./Window.scss";

function Window({ title }) {
  return (
    <div className="Window">
      <nav>
        <div className="side-buttons">
          <div className="cross side-button"></div>
          <div className="minus side-button"></div>
          <div className="resize side-button"></div>
        </div>
        <p>{title}</p>
        <div className="search-line"></div>
      </nav>
    </div>
  );
}

export default Window;
