import React from "react";
import Search from "../Search";

function LandingImg(props) {
  return (
    <header className="masthead header-border header-border">
      <br />
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center", color: "#FDFEFE" }}>
        <h1>Search, View and Download Amazing pictures</h1>
        <h3>Millions of Amazing Images</h3>
        <Search filterPhotos={props.filterPhotos} getPhotos={props.getPhotos} />
      </div>
    </header>
  );
}

export default LandingImg;
