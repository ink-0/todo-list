import TodoListInput from "../TodoListInput";
import TodoListItem from "../TodoListItem";
import styled, { css } from "styled-components";
import useToggle from "../../../hooks/useToggle";
import Card from "../../templates/Card";
const TodoSwitch = ({
  isClicked,
  columnId,
  id,
  title,
  content,
  author,
  toggleActions,
  setTodos,
  setHistories,
  columnName,
  setPopup,
  idState,
  setIdState,
  colState,
  setColState,
  itemInfo,
}) => {
  const [isInput, toggleActions2] = useToggle(false);
  let isPatch = true; //추가인지 수정인지를 알 수있는 flag를 enrollClickHandler에 전달하기 위함
  let template;
  if (isInput) {
    template = (
      <TodoListInput
        {...{
          columnId,
          id,
          title,
          content,
          toggleActions2,
          toggleActions,
          isPatch,
          setTodos,
          columnName,
          setHistories,
        }}
      />
    );
  } else if (isClicked) {
    isPatch = false;
    template = (
      <TodoListInput
        {...{
          setTodos,
          columnName,
          columnId,
          id,
          title,
          content,
          toggleActions2,
          toggleActions,
          setHistories,
          isPatch,
        }}
      />
    );
  } else {
    template = (
      <div onClick={toggleActions2.toggle}>
        <TodoListItem
          draggable="true"
          {...{
            setTodos,
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
          }}
        />
      </div>
    );
  }

  return (
    <Card
      id={id}
      columnId={columnId}
      className="card"
      draggable="true"
      {...{
        title,
        content,
        author,
        setTodos,
        idState,
        setIdState,
        colState,
        setColState,
        itemInfo,
      }}
    >
      {template}
    </Card>
  );
};

export default TodoSwitch;
