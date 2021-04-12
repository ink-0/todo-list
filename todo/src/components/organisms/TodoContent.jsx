import React from "react";
import TodoListItem from "../molecules/TodoListItem";
import TodoListWrap from "../molecules/TodoListWrap";
import TodoListInput from "../molecules/TodoListInput";
import TodoTitle from "../molecules/TodoTitle";
import TodoListForm from "../molecules/TodoListForm";
import TodoListColumn from "../molecules/TodoListColumn";
// add 이벤트 구현
const TodoContent = () => {
  return (
    <TodoListWrap>
      <TodoListColumn>
        <TodoTitle>해야할 일</TodoTitle>
        <TodoListForm>
          <TodoListInput></TodoListInput>
        </TodoListForm>
        <TodoListForm>
          <TodoListInput></TodoListInput>
        </TodoListForm>
      </TodoListColumn>

      <TodoListColumn>
        <TodoTitle>하고 있는 일</TodoTitle>
        <TodoListForm>
          <TodoListItem>값을 넣어주세요</TodoListItem>
        </TodoListForm>
      </TodoListColumn>

      <TodoListColumn>
        <TodoTitle>완료한 일</TodoTitle>
        <TodoListForm>
          <TodoListItem>값을 넣어주세요</TodoListItem>
        </TodoListForm>
      </TodoListColumn>
    </TodoListWrap>
  );
};

export default TodoContent;
