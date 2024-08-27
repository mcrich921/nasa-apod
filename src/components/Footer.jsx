import React from "react";

function Footer(props) {
  const { handleToggleInfo, data, showInfo } = props;

  return (
    <footer>
      <div className="textGrad"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>NASA Astronomy Picture of the Day</h1>
      </div>
      {!showInfo && (
        <button onClick={handleToggleInfo}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      )}
    </footer>
  );
}

export default Footer;
