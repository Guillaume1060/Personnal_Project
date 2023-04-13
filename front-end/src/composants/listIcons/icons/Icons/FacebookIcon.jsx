import React from "react";
import classes from "./icon.module.scss"
function IconFcb(props) {
  return (
    <a href="https://www.facebook.com/carlaandtheheadytide" target="_blank" rel="noreferrer">
    <svg
      className={classes.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill={props.color}
      // fill="#E0E0D5"
    >
      <path d="M29 0H3C1.35 0 0 1.35 0 3v26c0 1.65 1.35 3 3 3h13V18h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 .9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z"></path>
    </svg>
    </a>
  );
}

export default IconFcb;