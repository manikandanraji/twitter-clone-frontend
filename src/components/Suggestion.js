import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	border-left: 1px solid ${props => props.theme.tertiaryColor};
	height: 100vh;
	padding: 1rem;
	position: fixed;
	margin-left: 55%;

	@media screen and (max-width: 530px) {
		display: none;
	}
`;

const Suggestion = () => {
	return <Wrapper>This is the suggestion component</Wrapper>;
};

export default Suggestion;
