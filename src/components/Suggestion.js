import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	border-left: 1px solid ${props => props.theme.tertiaryColor};
	height: 100vh;
	padding: 1rem;
`;

const Suggestion = () => {
	return <Wrapper>This is the suggestion component</Wrapper>;
};

export default Suggestion;
