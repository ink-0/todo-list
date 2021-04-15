import React from "react";

const Board = props => {
  const drop = e => {
    e.preventDefault();
    console.log("1.board drop id", props.id);
    const cardId = e.dataTransfer.getData("cardId");

    const card = document.getElementById(cardId);
    card.style.display = "block";
    e.target.appendChild(card);
    //여기에다가 업데이트 + 리랜더링 ~~

    //appendChild 가아니라 데이터를 다른 컬럼으로 옮겨준다 -> 리 랜더링 한다.
    // 해당 todo id에 해당하는 데이터를 선택된 컬럼에 옮겨준다. 복사?해서 새로운 id부여해주고 기존 db 는 삭제
  };

  const dragOver = e => {
    e.preventDefault();
    //console.log("end");
  };
  const dragEnd = () => {
    console.log("2.board drag end id", props.id);
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
