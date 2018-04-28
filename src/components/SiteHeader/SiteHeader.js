import React from "react";
import SiteNav from "../SiteNav/SiteNav";
import { Link } from "react-router-dom";
import { IconButton, AppBar } from "material-ui";
import Build from "material-ui/svg-icons/action/build";
import { white } from "material-ui/styles/colors";
import styled from "styled-components";

const ThinnerAppBar = styled(AppBar)`
  padding: 0.5em 1em;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export default ({ links = [], className = "", homelink = "/" }) => (
  <ThinnerAppBar
    title="Evan Peterson's Portfolio"
    iconElementLeft={
      <Link to={homelink}>
        <IconButton>
          <Build color={white} />
        </IconButton>
      </Link>
    }
  >
    <SiteNav links={links} />
  </ThinnerAppBar>
);
