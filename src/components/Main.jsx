import React from "react";

function Main(props) {
  const { data } = props;

  return (
    <div className="imgContainer">
      <img
        src={data.hdurl}
        alt={data.title || "background image"}
        className="mainImage"
      />
    </div>
  );
}

export default Main;
