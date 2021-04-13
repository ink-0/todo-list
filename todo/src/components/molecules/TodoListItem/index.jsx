import React from "react";
import { useEffect, useState, useRef } from "react";
import SmallButton from "../../atoms/Buttons/SmallButton";
import Image from "../../atoms/Image";
import Span from "../../atoms/Span";
import closeButton from "../../../images/closeButton.svg";

const TodoListItem = ({ title, content, author }) => {
  const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        console.log("클릭되었다");
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };

  const sayhello = () => console.log("say hello");
  const close = useClick(sayhello);

  // const clickClose = (e) => {
  //   e.preventDefault();
  //   console.log("closeclick");
  // };

  return (
    <>
      <SmallButton _position="absolute" _right="3px" ref={close}>
        <Image src={closeButton} _width="10px" />
      </SmallButton>
      <Span _display="block" _color="#000" _fontSize="17px" _fontWeight="700">
        {title}
      </Span>
      <Span _display="block" _color="#000" _fontSize="16px">
        {content}
      </Span>
      <Span _display="block" _color="#969595" _fontSize="13px">
        {author}
      </Span>
    </>
  );
};

export default TodoListItem;
