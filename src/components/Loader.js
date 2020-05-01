import React from "react";
import styled, { keyframes } from "styled-components";
import { LoadingIcon } from "./Icons";

const rotateABD = keyframes`
  from {
    transform: rotate(-360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Wrapper = styled.div`
  svg {
    fill: ${(props) => props.theme.accentColor};
    width: 34px;
    height: 34px;
    position: absolute;
    top: 60%;
    left: 43%;
    opacity: 0.8;
    transform: translateX(-50%) translateY(-50%);
    animation: ${rotateABD} 2s linear infinite;
  }
`;

export default () => (
  <Wrapper>
    <LoadingIcon />
  </Wrapper>
);
