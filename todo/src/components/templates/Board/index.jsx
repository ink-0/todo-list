import React from "react";
import axios from "axios";
const Board = ({
  setTodos,
  idState,
  setIdState,
  colState,
  setColState,
  itemInfo,
  ...props
}) => {
  const drop = async (e) => {
    e.preventDefault();
    // console.log("📌(후)columnId:", props.id);
    // console.log("📌(전)columnId:", colState);
    // console.log("📌(전)id", idState);
    console.log("⭐️itemInfo 자체", itemInfo);
    console.log("⭐itemInfo", itemInfo.current.title);
    console.log("⭐itemInfo", itemInfo.current.content);
    console.log("⭐itemInfo", itemInfo.current.author);
    const cardId = e.dataTransfer.getData("cardId");
    // const { title, content, author } = itemInfo;

    // await axios.delete(`/todos?columnId=${colState}&id=${idState}`);
    // const response = await axios.put(
    //   `/todos?columnId=${props.id}&title=${itemInfo.current.title}&content=${itemInfo.current.content}&author=${itemInfo.current.author}`
    // );
    // console.log("⭐️response", response);
    // setTodos(() => response.data);

    // const card = document.getElementById(cardId);
    // card.style.display = "block";
  };

  const dragOver = (e) => {
    e.preventDefault();
    //console.log("end");
  };
  const dragEnd = () => {
    console.log("📌(후)columnId:(한번더확인)", props.id);
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  );
};
export default Board;
