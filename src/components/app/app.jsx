import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  const {rentNumber} = props;

  return (
    <Main rentNumber={rentNumber}/>
  );
};

App.propTypes = {
  rentNumber: PropTypes.number.isRequired,
};

export default App;
