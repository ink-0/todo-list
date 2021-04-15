import { useState, useEffect } from "react";
import useToggle from "../../../hooks/useToggle";
import Header from "../../molecules/Header";
import HistoryList from "../../organisms/HistoryList";
import TodoListWrap from "../../templates/TodoListWrap";
import loadItems from "../../../serviceUtils/loadItems";
import styled from "styled-components";
import Board from "../../templates/Board";
import Card from "../../templates/Card";

const Div = styled.div`
  border: 3px solid black;
  background: #63bda4;
  border-radius: 10px;
`;

function App() {
  const [isOpen, isOpenActions] = useToggle(false);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    loadItems(setHistories, "/logs");
  }, []);

  return (
    <Div>
      <HistoryList {...{ isOpen, isOpenActions, histories }} />
      <Header isOpenActions={isOpenActions} />
      <TodoListWrap
        {...{
          setHistories,
        }}
      ></TodoListWrap>

      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>card one</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
        <Card id="card-2" className="card" draggable="true">
          <p>card Two</p>
        </Card>
      </Board>
    </Div>
  );
}

export default App;
