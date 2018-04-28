import React from "react";
import { Chip } from "material-ui";
import muiThemeable from "material-ui/styles/muiThemeable";

const PriceTag = ({ children, style, muiTheme }) => {
  const styles = {
    margin: "0.5em",
    marginBottom: "0.75em"
  };

  return (
    <Chip
      style={{ ...styles, ...style }}
      backgroundColor={muiTheme.palette.accent1Color}
      labelColor={muiTheme.palette.alternateTextColor}
    >
      {children}
    </Chip>
  );
};

export default muiThemeable()(PriceTag);
