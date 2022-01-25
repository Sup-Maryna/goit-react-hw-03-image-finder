import React from "react";
import css from "./Button.module.css";

export default function Button(props) {
  return (
    <button type="button" onClick={props.onClick} className={css.Button}>
      {props.children}
    </button>
  );
}
