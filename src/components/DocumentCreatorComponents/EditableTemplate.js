import React from "react";
import Panel from "../Panel";
import styled from "styled-components";
import withDroppable from "../drag-and-drop/withDroppable";

function handleDrop(e) {
  const data = e.dataTransfer.getData("text/plain");
  this.setState(prevState => ({
    data: [...prevState.data, data]
  }));
  e.preventDefault();
}

const TextArea = styled.textarea`
  width: 100%;
  height: 70vh;
  border: none;
  outline: none;
  resize: none;
`;

const EditablePanel = ({ children, ...props }) => (
  <Panel {...props}>
    <TextArea>{children}</TextArea>
  </Panel>
);

const dropConfig = { handleDrop, initialState: { data: [] } };

export default withDroppable(dropConfig)(EditablePanel);
