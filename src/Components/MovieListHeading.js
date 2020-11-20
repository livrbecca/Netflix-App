import React from "react";

const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
      <h4>{props.heading3}</h4>
      <h1>{props.heading2}</h1>
    </div>
  );
};

export default MovieListHeading;
