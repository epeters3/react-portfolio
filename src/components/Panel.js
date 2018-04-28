import React from "react";
import { Paper } from "material-ui";

const Panel = ({ children, ...rest }) => {
  const panelStyle = {
    padding: "1em 2em 1em 2em",
    margin: "1em 0 1em 0"
  };
  return (
    <Paper style={panelStyle} {...rest}>
      {children}
    </Paper>
  );
};

export default Panel;
