import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENTAL_NUMBER: 6
};

ReactDOM.render(
    <App
      rentalNumber={Settings.RENTAL_NUMBER}
    />,
    document.querySelector(`#root`)
);
