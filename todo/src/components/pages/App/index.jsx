import { useState, useEffect } from "react";
import useToggle from "../../../hooks/useToggle";
import axios from "axios";
import Header from "../../molecules/Header";
import HistoryList from "../../organisms/HistoryList";
import TodoListWrap from "../../templates/TodoListWrap";
import styled from "styled-components";

const Div = styled.div`
  border: 3px solid black;
  background: #63bda4;
  border-radius: 10px;
`;

const getAxios = async (setState, url) => {
  const { data } = await axios.get(url);
  setState(data);
};

function App() {
  const [isOpen, isOpenActions] = useToggle(false);
  const [todos, setTodos] = useState([]);

  // const deleteTodo = () => deleteData(setTodos, "/todos");
  // const close = useClick(deleteTodo);
  // const sayhello = () => {
  //   console.log("say hello");
  // };
  // const title = useClick(sayhello);

  //////////////////
  useEffect(() => {
    getAxios(setTodos, "/todos");
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <Div>
      <HistoryList isOpen={isOpen} isOpenActions={isOpenActions} />
      <Header isOpenActions={isOpenActions} />
      <TodoListWrap todos={todos}></TodoListWrap>
    </Div>
  );
}

export default App;

//팝업창 뜨기선택한 카드를 삭제할까요
//삭제시 위로 슬라이드
//z클릭 시 console
//데이터 삭제
//둘이 연결

// const deleteData = async (setState, url) => {
//   // const { data } = await axios.delete('/todos?columnId=1')
//   const { data } = await axios.delete("/todos/closed", {
//     params: {
//       user_col_id: 1,
//     },
//   });
//   setState(data);
// };
