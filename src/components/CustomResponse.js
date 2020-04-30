import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	height: 70vh;
	font-size: 1.1rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 530px) {
		font-size: 1rem;
	}
`;

export default ({ text }) => (
	<Wrapper>
		<p>{text}</p>
	</Wrapper>
);
