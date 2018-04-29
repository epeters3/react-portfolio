import React from "react";
import EditableLabel from "./helpers/EditableLabel";
import Option from "./helpers/Option";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 3px;
  background-color: white;
`;

export default props => (
  <Option {...props}>
    <EditableLabel />
    <Input disabled />
  </Option>
);
