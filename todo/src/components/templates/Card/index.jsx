import React from "react";

const Card = props => {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("cardId", target.id);

    setTimeout(() => {
      console.log("card drag start", props.id);
      target.style.display = "none";
    }, 0);
  };
  const dragOver = e => {
    e.stopPropagation();
    //console.log("card drag over");
  };

  const drop = () => {
    console.log("card drop!!");
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDrop={drop}
    >
      {props.children}
    </div>
  );
};

export default Card;
