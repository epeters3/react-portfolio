import React from "react";
import styles from "./SnakeGame.css";
import classes from "join-classnames";
import { Paper, TextField, Divider, AppBar } from "material-ui";
import { Col } from "react-bootstrap";

class SnakeGame extends React.Component {
  constructor(props) {
    super(props);
    const { DIRECTIONS } = this.props;
    this.state = {
      COL_CHANGE: [0, 1, 0, -1],
      ROW_CHANGE: [-1, 0, 1, 0],
      SNAKE_DIRECTION: DIRECTIONS["up"],
      IS_DYING: false,
      IS_EATING: false,
      GAME_SPEED: 200
    };
    let interval;
  }

  gameLoop() {}

  componentDidMount() {
    this.interval = setInterval(this.gameLoop, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className={styles.snakeGrid} />
        <div className={styles.scoreBoard}>
          <p id="score" />
        </div>
      </div>
    );
  }
}

SnakeGame.defaultProps = {
  GRID_HEIGHT: 40, // = 600 / 15
  GRID_WIDTH: 60, // = 900 / 15
  BLOCK_SIZE: 15,
  // Accesses the correct COL_CHANGE and ROW_CHANGE
  DIRECTIONS: {
    up: 0,
    right: 1,
    down: 2,
    left: 3
  },
  /*
        0
    3       1
        2
    */
  COL_CHANGE: [0, 1, 0, -1],
  ROW_CHANGE: [-1, 0, 1, 0]
};

export default SnakeGame;
