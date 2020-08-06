import React from "react";

const Box = props => {
  return (
    <button className="Box" onClick={props.onMoveHandler}>
      {props.content}
    </button>
  );
};
export default Box;
