import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  position: static;
  width: 276px;
  height: 23px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  border: none;
  color: #828282;
`;

const TitleInput = ({ type = "text", titleRef, ...props }) => (
  <StyledInput type={type} ref={titleRef} {...props} />
);

export default TitleInput;
