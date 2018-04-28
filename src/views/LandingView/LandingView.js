import React from "react";
import { Link } from "react-router-dom";
import styles from "../../App.css";
import Messenger from "../../components/Messenger";
import Chip from "../../components/Chip";
import Panel from "../../components/Panel";
import RotatingJumbotron from "../../components/RotatingJumbotron";
import { RaisedButton } from "material-ui";
import { Col } from "react-bootstrap";
import Forward from "material-ui/svg-icons/content/forward";

const LandingView = ({ hero, title, subtitle, cta }) => (
  <div>
    <Chip>A Randomly Rotating Jumbotron:</Chip>
    <RotatingJumbotron />

    <Col sm={6} xs={12}>
      <Chip>A Messenger Component:</Chip>
      <Messenger />
    </Col>

    <Col sm={6} xs={12}>
      <Chip>Forms, CSVs, and User Workflow:</Chip>
      <Panel>
        <div
          className={styles.flexContainerVerticalCenter}
          style={{ padding: "2em 1em 2em 1em" }}
        >
          <h4>Check out the Machine Learning Page</h4>
          <Link to="/machine-learning">
            <RaisedButton
              icon={<Forward />}
              secondary={true}
              label="Let's Go"
            />
          </Link>
        </div>
      </Panel>
    </Col>
  </div>
);

export default LandingView;
