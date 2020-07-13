import styled from "styled-components";

export default styled.div`
  margin-left: 14.6%;
  display: grid;
	grid-template-columns: 65% 1fr;

  @media screen and (max-width: 1110px) {
    grid-template-columns: 1fr;
    margin-left: 10%;
  }

  @media screen and (max-width: 530px) {
    margin-left: 0;
    grid-template-columns: 1fr;
  }
`;
