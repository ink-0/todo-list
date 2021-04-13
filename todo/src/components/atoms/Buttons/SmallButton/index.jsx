import React from "react";
import styled from "styled-components";
import { ref } from "react";

const SmallButton = styled.button`
  position: ${(props) => props._position};
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  right: 0px;
  top: 0px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Button = React.forwardRef((props, ref) => (
  <SmallButton ref={ref} {...props}>
    {props.children}
  </SmallButton>
));

export default Button;
