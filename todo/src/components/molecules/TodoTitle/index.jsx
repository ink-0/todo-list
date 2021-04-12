import React from "react";
import styled from "styled-components";
import Span from "../../atoms/Span";
import Label from "../../atoms/Label";
import SmallButton from "../../atoms/SmallButton";
import Image from "../../atoms/Image";
import hamburgerBtn from "../../../images/hamburgerButtonIcon.png";
import ButtonList from "../ButtonList";

const WrapDiv = styled.div`
  display: flex;
  width: 318px;
  padding: 0px 10px;
  justify-content: space-between;
  place-items: center;
`;

const LeftDiv = styled.div`
  display: flex;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
`;

const TodoTitle = ({ children, ...props }) => (
  <WrapDiv>
    <LeftDiv>
      <div>{children}</div>
      <Label>10</Label>
    </LeftDiv>
    <div>
      <ButtonList isIcon={true}></ButtonList>
    </div>
  </WrapDiv>
);

export default TodoTitle;
