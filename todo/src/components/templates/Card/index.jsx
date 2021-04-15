import React from "react";
//여기요여기요여기요여기요
const Card = ({
  idState,
  setIdState,
  colState,
  setColState,
  title,
  content,
  author,
  itemInfo,
  ...props
}) => {
  const dragStart = (e) => {
    const target = e.target;
    itemInfo.current = { title, content, author };

    // console.log("🔥target", target.id);
    // console.log("🔥columnId", props.columnId);
    console.log("🔥title", title);
    console.log("🔥content", content);
    console.log("🔥author", author);
    e.dataTransfer.setData("cardId", target.id);

    setIdState(target.id);
    setColState(props.columnId);
    // setTimeout(() => {

    //   // target.style.display = "none";
    // }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
    //console.log("card drag over");
  };

  const drop = () => {
    // console.log("card drop!!");
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
