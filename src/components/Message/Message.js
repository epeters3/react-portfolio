import React from "react";
import styles from "./Message.css";
import { Paper } from "material-ui";
import { Col } from "react-bootstrap";
import muiThemeable from "material-ui/styles/muiThemeable";
import SmartDate from "../SmartDate";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      sent,
      timestamp,
      baseStyle,
      sentStyle,
      recievedStyle,
      muiTheme
    } = this.props;
    return (
      <Col xs={12} className={sent ? styles.sent : styles.receieved}>
        <Col xs={9}>
          {" "}
          {/* Will justify left or right depending on being sent or recieved. */}
          <Paper
            zDepth={2}
            style={
              sent
                ? {
                    ...baseStyle,
                    ...sentStyle,
                    backgroundColor: muiTheme.palette.accent2Color
                  }
                : { ...baseStyle, ...recievedStyle }
            }
          >
            {this.props.children}
          </Paper>
          {/* TODO: Pass this date to a SmartDate */}
          <span className={styles.timestamp}>
            <SmartDate date={timestamp} />
          </span>
        </Col>
      </Col>
    );
  }
}

Message.defaultProps = {
  sent: true, // whether the message was sent or recieved (affects orientation and color).
  body: "😁",
  timestamp: undefined,
  baseStyle: {
    padding: "1em",
    marginBottom: "0.5em",
    marginTop: "1em"
  },
  sentStyle: {},
  recievedStyle: {}
};

export default muiThemeable()(Message);
