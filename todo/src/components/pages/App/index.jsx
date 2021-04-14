import { useState, useEffect, useRef } from "react";
import useToggle from "../../../hooks/useToggle";
import useClick from "../../../hooks/useClick";
import axios from "axios";
import Header from "../../molecules/Header";
import HistoryList from "../../organisms/HistoryList";
import TodoListWrap from "../../templates/TodoListWrap";
import styled from "styled-components";
import Popup from "../../Popup";

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
      <Popup />
    </Div>
  );
}

export default App;
