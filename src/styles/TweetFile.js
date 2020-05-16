import styled, { css } from "styled-components";

export default styled.img`
  width: 500px;
  height: 285px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 0.5rem;

  ${(props) =>
    props.newtweet &&
    css`
      margin-bottom: 1.5rem;
    `}

  @media screen and (max-width: 530px) {
    width: 350px;
    height: 260px;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 220px;
  }
`;
