import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;

  & :hover: {
    border: 1px solid black;
  }
`;

export default props => <Input placeholder="Enter Label Here" {...props} />;
