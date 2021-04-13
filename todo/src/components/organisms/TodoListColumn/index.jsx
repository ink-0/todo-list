import styled from "styled-components";
import TodoTitle from "../../molecules/TodoTitle";
import TodoSwitch from "../../molecules/TodoSwitch";
import TodoListInput from "../../molecules/TodoListInput";
import useToggle from "../../../hooks/useToggle";
import TodoSwitch from "../../molecules/TodoSwitch";

const Div = styled.div`
  margin: 5px;
`;

const TodoListColumn = ({ columnName, items }) => {
  const [isClicked, toggleActions] = useToggle(false);

  let template;

  if (!isClicked) {
    template = (
      <Div>
        <TodoTitle addTodo={toggleActions.toggle}>{columnName}</TodoTitle>
        {items.map(({ id, title, content, author }) => {
          return (
            <TodoSwitch key={id} {...{ title, content, author }}></TodoSwitch>
          );
        })}
      </Div>
    );
  } else {
    template = (
      <Div>
        <TodoTitle addTodo={toggleActions.toggle}>{columnName}</TodoTitle>
        <TodoListInput></TodoListInput>
        {items.map(({ id, title, content, author }) => {
          return (
            <TodoSwitch key={id} {...{ title, content, author }}></TodoSwitch>
          );
        })}
      </Div>
    );
  }

  return <>{template}</>;
};

export default TodoListColumn;
