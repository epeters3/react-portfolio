import React from "react";
import styles from "./Messenger.css";
import classes from "join-classnames";
import {
  Paper,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  ToolbarGroup,
  Toggle
} from "material-ui";
import CommunicationChat from "material-ui/svg-icons/communication/chat";
import { Col } from "react-bootstrap";
import Message from "../Message";

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      sending: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    //  console.log(`${e.target.name}'s value is now: ${e.target.value}!`); // DEBUG //
  }

  // Adds the user's drafted message to the messages
  // when enter key is pressed. 'Submits' their message.
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.setState(state => ({
        messages: [
          ...state.messages,
          {
            sent: state.sending,
            body: state["messenger-text-field"],
            timestamp: Date() // The current date and time
          }
        ], // Add the text field's value as a new message
        "messenger-text-field": "" // Clear the text field
      }));
    }
  }

  render() {
    const { sending } = this.state;
    return (
      <Paper style={{ paddingBottom: "3%", marginBottom: "1em" }}>
        <AppBar
          style={{ marginBottom: "3%" }}
          title="Messenger"
          iconElementLeft={
            <IconButton>
              <CommunicationChat />
            </IconButton>
          }
        />
        {this.state.messages.map((message, i) => (
          <Message
            sent={message.sent}
            timestamp={message.timestamp}
            key={`MESSAGE_${i}`}
          >
            {message.body}
          </Message>
        ))}
        <div style={{ paddingLeft: "3%", paddingRight: "3%" }}>
          <TextField
            name="messenger-text-field"
            fullWidth
            multiLine
            hintText="Write a message..."
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state["messenger-text-field"]}
            style={{ marginBottom: "1em", marginTop: "1em" }}
          />
          <Toggle
            label={
              sending
                ? "Toggle to receive your messages"
                : "Toggle to send your messages"
            }
            toggled={sending}
            onToggle={() =>
              this.setState(state => ({ sending: !state.sending }))
            }
          />
        </div>
      </Paper>
    );
  }
}

Messenger.defaultProps = {
  messages: [
    {
      sent: true,
      body: "I sent this message! 👌",
      timestamp: new Date() - 2
    },
    {
      sent: false,
      body: "I sent this message back! 🙌",
      timestamp: new Date() - 1
    }
  ]
};

export default Messenger;
