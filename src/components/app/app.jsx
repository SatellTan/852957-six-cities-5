import React from "react";
import Main from "../main/main";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentNumber} = props;

  return (
    <Main rentNumber={rentNumber}/>
  );
};

export default App;
