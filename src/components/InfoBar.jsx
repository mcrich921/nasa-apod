import React from "react";

function InfoBar(props) {
  const { handleToggleInfo, data } = props;
  console.log(document.getElementById("root").offsetWidth);

  return (
    <div className="sidebar">
      <div onClick={handleToggleInfo} className="overlay"></div>
      <div className="contents">
        <h2>{data?.title}</h2>
        <div>
          <hr></hr>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleInfo}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default InfoBar;
