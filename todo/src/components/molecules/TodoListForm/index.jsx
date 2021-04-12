import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  width: 308px;
  padding: 15px;
  margin-bottom: 10px;
  background: #fff;
  border: 2px black solid;
  border-radius: 10px;
`;

const TodoList = ({
  onSubmit = e => e.preventDefault(),
  children,
  ...props
}) => (
  <StyledForm {...props} onSubmit={onSubmit} noValidate>
    {children}
  </StyledForm>
);

export default TodoList;
