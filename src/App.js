import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingView from "./views/LandingView";
import MachineLearningView from "./views/MachineLearningView";
import DocumentCreatorView from "./views/DocumentCreatorView";
import SiteHeader from "./components/SiteHeader";
import styled from "styled-components";
import styles from "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {
  blue500,
  blue700,
  redA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";

const Main = styled.main`
  padding: 1em;
`;

// Overrides of the Material-UI Theme
const muiTheme = getMuiTheme({
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: redA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
});

const links = [
  { exact: true, path: "/", text: "Home", component: LandingView },
  {
    path: "/machine-learning",
    text: "Machine Learning",
    component: MachineLearningView
  },
  {
    path: "/document-creator",
    text: "Document Creator",
    component: DocumentCreatorView
  }
];

const App = class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={styles.app}>
          <SiteHeader links={links} />
          <Main className={styles.wrapper}>
            {links.map(({ text, ...props }) => <Route {...props} />)}
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
