import React from "react";
import styled from "styled-components";
import TodoTitle from "../../molecules/TodoTitle";
import TodoSwitch from "../../molecules/TodoSwitch";

const Div = styled.div`
  margin: 5px;
`;

const TodoListColumn = ({ columnName, items }) => {
  const clickClose = (e) => {
    e.preventDefault();
    console.log("closeclick");
  };

  return (
    <Div>
      <TodoTitle itemCount={items.length}>{columnName}</TodoTitle>
      {items.map(({ id, title, content, author }) => {
        return (
          <TodoSwitch key={id} {...{ title, content, author }}></TodoSwitch>
        );
      })}
    </Div>
  );
};

export default TodoListColumn;
