import React from "react";
import Delete from "material-ui/svg-icons/action/delete";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Trash = styled(Delete)`
  cursor: pointer;
`;

export default ({ onDelete, deleteKey, children, ...props }) => (
  <Container {...props}>
    {children}
    <Trash onClick={onDelete} />
  </Container>
);
