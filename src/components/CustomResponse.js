import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 70vh;
  font-size: 1.1rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  @media screen and (max-width: 530px) {
    font-size: 1rem;
  }
`;

export default ({ text }) => (
  <Wrapper>
    <p>{text}</p>
  </Wrapper>
);
