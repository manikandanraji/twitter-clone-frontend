import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.tertiaryColor};
  font-weight: 500;
`;

const Header = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Header;
