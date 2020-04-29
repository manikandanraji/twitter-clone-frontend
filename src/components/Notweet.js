import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	height: 70vh;
	border-right: 1px solid ${props => props.theme.tertiaryColor};
	font-size: 1.3rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
font-style: italic;
`;

const Notweet = () => (
	<Wrapper>
		<p>Follow some people to get feed updates</p>
	</Wrapper>
);

export default Notweet;
