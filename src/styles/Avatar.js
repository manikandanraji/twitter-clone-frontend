import styled from "styled-components";

export default styled.img`
  height: ${(props) => (props.lg ? "130px" : "40px")};
  width: ${(props) => (props.lg ? "130px" : "40px")};
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 530px) {
    height: ${(props) => (props.lg ? "110px" : "40px")};
    width: ${(props) => (props.lg ? "110px" : "40px")};
  }
`;
