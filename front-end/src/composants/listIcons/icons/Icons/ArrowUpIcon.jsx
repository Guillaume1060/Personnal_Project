import React from "react";
import classes from "./icon.module.scss"


function ArrowUpIcon() {
  return (
    <a href="#home" className={classes.iconUp}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path d="M23 14c-.278 0-.555-.116-.753-.341L16 6.519l-6.247 7.14a1 1 0 11-1.505-1.317l7-8a1 1 0 011.506 0l7 8A1 1 0 0123.002 14z"></path>
    </svg>
    </a>
  );
}

export default ArrowUpIcon;
