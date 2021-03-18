import React, { Fragment } from "react";
import spin from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spin}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;
