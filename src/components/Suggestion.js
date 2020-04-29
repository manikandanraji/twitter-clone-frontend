import React from "react";
import styled from "styled-components";
import WhoToFollow from "./WhoToFollow";

const Wrapper = styled.div`
	border-left: 1px solid ${props => props.theme.tertiaryColor};
	padding: 1rem;

	@media screen and (max-width: 1110px) {
		display: none;
	}
`;

const Suggestion = () => {
	return (
		<Wrapper>
			<WhoToFollow />
		</Wrapper>
	);
};

export default Suggestion;
