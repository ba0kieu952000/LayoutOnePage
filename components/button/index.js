import React from "react";

import classes from "./button.module.css";

const Button = (props) => {
  return (
    <div className={`${classes.boxButton} ${props.className}`}>
      <button className={classes.button} onClick={() => props?.onClick?.()}>
        {props?.children}
      </button>
    </div>
  );
};

export default Button;
