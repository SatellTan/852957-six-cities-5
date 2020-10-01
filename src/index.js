import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENT_NUMBER: 6
};

ReactDOM.render(
    <App
      rentNumber={Settings.RENT_NUMBER}
    />,
    document.querySelector(`#root`)
);
