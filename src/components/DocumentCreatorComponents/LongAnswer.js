import React from "react";
import EditableLabel from "./helpers/EditableLabel";
import Option from "./helpers/Option";
import styled from "styled-components";

const Textarea = styled.textarea`
  border-radius: 3px;
  background-color: white;
  resize: none;
`;

export default props => (
  <Option {...props}>
    <EditableLabel />
    <Textarea disabled />
  </Option>
);
