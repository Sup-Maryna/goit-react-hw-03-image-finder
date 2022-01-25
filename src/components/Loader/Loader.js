import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default class App extends React.Component {
  render() {
    return (
      <div className={css.loader}>
        <Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          color="#00BFFF"
        />
      </div>
    );
  }
}
