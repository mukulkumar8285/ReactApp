import React from "react";

function Card({ Image, Movie, Text, Name, Date, Timing, background }) {
  return (
    <div className="card-container">
      <div className="background-overlay">
      <img id="Background_Img" src={background} alt="bg" />
      <div id="Main">
        <div id="Title">
          <img id="Small_Image" src={Image} alt="Wait" width="100%" height="100%" />
        </div>
        <div id="Title_1">
          <h2>{Movie}</h2>
          <p>{Date}</p>
          <p style={{ display: "flex", textAlign: "center", alignItems: "center", gap: "10px" }}>
            {Timing} <span>{Text}</span>
          </p>
        </div>
        
      </div>
      <p>{Name}</p>
      </div>
    </div>
  );
}
export default Card;
