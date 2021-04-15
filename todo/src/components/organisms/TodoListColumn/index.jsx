import { useState } from "react";
import styled from "styled-components";
import TodoTitle from "../../molecules/TodoTitle";
import TodoListInput from "../../molecules/TodoListInput";
import TodoSwitch from "../../molecules/TodoSwitch";
import useToggle from "../../../hooks/useToggle";
import Board from "../../templates/Board";
const Div = styled.div`
  margin: 5px;
`;

const TodoListColumn = ({
  setTodos,
  columnId,
  columnName,
  items,
  setHistories,
  setPopup,
  idState,
  setIdState,
  colState,
  setColState,
}) => {
  const [isClicked, toggleActions] = useToggle(false);
  const itemInfo = { current: null };

  let template;
  if (!isClicked) {
    template = (
      <Div>
        <TodoTitle
          addTodo={toggleActions.toggle}
          itemCount={items.length}
          columnId={columnId}
        >
          {columnName}
        </TodoTitle>
        {items.map(({ id, title, content, author }) => {
          return (
            <TodoSwitch
              key={id}
              {...{
                setTodos,
                columnName,
                columnId,
                id,
                title,
                content,
                author,
                setHistories,
                setPopup,
                idState,
                setIdState,
                colState,
                setColState,
                itemInfo,
              }}
            ></TodoSwitch>
          );
        })}
      </Div>
    );
  } else {
    template = (
      <Div>
        <TodoTitle addTodo={toggleActions.toggle} itemCount={items.length}>
          {columnName}
        </TodoTitle>
        <TodoSwitch
          {...{
            columnId,
            isClicked,
            columnName,
            toggleActions,
            setTodos,
            setHistories,
            setPopup,
            idState,
            setIdState,
            colState,
            setColState,
            itemInfo,
          }}
        />
        {items.map(({ id, title, content, author }) => {
          return (
            <TodoSwitch
              key={id}
              {...{
                setTodos,
                columnName,
                columnId,
                id,
                title,
                content,
                author,
                setHistories,
                setPopup,
                idState,
                setIdState,
                colState,
                setColState,
                itemInfo,
              }}
            ></TodoSwitch>
          );
        })}
      </Div>
    );
  }

  return (
    <Board
      id={columnId}
      {...{
        setTodos,
        idState,
        setIdState,
        colState,
        setColState,
        itemInfo,
      }}
    >
      {template}
    </Board>
  );
};

export default TodoListColumn;
