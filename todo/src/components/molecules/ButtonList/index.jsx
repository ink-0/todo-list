import React from "react";
import styled from "styled-components";
import Image from "../../atoms/Image";
import SmallButton from "../../atoms/SmallButton";
import MediumButton from "../../atoms/MediumButton";
import PlusButtonImg from "../../../images/plusButton.svg";
import CloseButtonImg from "../../../images/closeButton.svg";

const Div = styled.div`
  padding: 10px 45px 0px 45px;
`;
const ButtonList = ({ isIcon }) => {
  const plusButton = (
    <SmallButton>
      <Image src={PlusButtonImg} _width="23px" />
    </SmallButton>
  );
  const closeButton = (
    <SmallButton>
      <Image src={CloseButtonImg} _width="20px" />
    </SmallButton>
  );
  const cancelButtons = (
    <MediumButton _background="#fff" _color="#3c4243">
      취소
    </MediumButton>
  );
  const enrollButtons = (
    <MediumButton _background="#62afb7" _color="white">
      등록
    </MediumButton>
  );
  const currentButton = isIcon ? (
    <>
      {plusButton}
      {closeButton}
    </>
  ) : (
    <>
      {cancelButtons}
      {enrollButtons}
    </>
  );
  return <Div>{currentButton}</Div>;
};

export default ButtonList;
