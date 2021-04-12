import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  padding: 20px 100px;
  margin: 50px 96px;
  background-color: #d9ffea;
  border: 4px solid black;
  border-radius: 30px;
`;

const TodoListWrap = ({ children, ...props }) => {
  return <Wrap {...props}>{children}</Wrap>;
};

export default TodoListWrap;
