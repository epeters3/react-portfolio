import React from "react";
import styles from "./SiteNav.css";
import { blue800 } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";
import classes from "join-classnames";
import muiThemeable from "material-ui/styles/muiThemeable";

const SiteNav = ({ links = [], className = "", muiTheme }) => (
  <nav className={classes(styles.nav, className)}>
    {links.map(({ path, text }) => (
      <Link className={styles.link} to={path}>
        <FlatButton
          label={text}
          labelStyle={{ color: muiTheme.palette.alternateTextColor }}
          hoverColor={blue800}
        />
      </Link>
    ))}
  </nav>
);

export default muiThemeable()(SiteNav);
