import React from "react";
import "./Button.scss";

const Button = props => {
  const onClick = data => {
    props.handleClick(props.data);
  };
  return (
    <div className="button" onClick={onClick}>
      {props.text}
    </div>
  );
};
export default Button;
