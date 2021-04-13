import TodoListInput from "../TodoListInput";
import TodoListItem from "../TodoListItem";
import styled, { css } from "styled-components";
import useToggle from "../../../hooks/useToggle";

const TodoSwitch = ({ title, content, author }) => {
  const [isInput, toggleActions] = useToggle(false);

  let template;

  if (isInput) {
    template = (
      <div>
        <TodoListInput {...{ title, content, toggleActions }} />
      </div>
    );
  } else {
    template = (
      <div onClick={toggleActions.toggle}>
        <TodoListItem {...{ title, content, author }} />
      </div>
    );
  }

  return <>{template}</>;
};

export default TodoSwitch;
