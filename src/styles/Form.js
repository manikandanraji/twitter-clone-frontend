import styled, { css } from "styled-components";

export default styled.form`
  width: 380px;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  padding: 2rem;
  border-radius: 10px;

  span {
    text-align: center;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .group-input {
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
      margin-right: 1rem;
    }
  }

  ${(props) =>
    props.lg &&
    css`
      width: 98%;
      border: none;
      border-radius: none;
    `}

  ${(props) =>
    props.center &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

@media screen and (max-width: 400px) {
    width: 360px;
  }
`;
