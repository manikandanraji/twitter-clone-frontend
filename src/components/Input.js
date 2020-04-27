import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 315px;
	background: ${props => props.theme.tertiaryColor2};
	padding: 0.2rem 0.4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.accentColor};
	margin-bottom: 2rem;

	input {
		width: 100%;
		background: inherit;
		border: none;
		font-size: 1rem;
		font-family: ${props => props.theme.font};
		color: ${props => props.theme.primaryColor};
	}

	label {
		color: ${props => props.theme.secondaryColor};
		margin-bottom: 2px;
	}
`;

export default ({ type = "text", text, value, onChange, placeholder }) => {
	return (
		<Wrapper>
			<label>{text}</label>
			<input autoComplete="new-password" type={type} placeholder={placeholder} value={value} onChange={onChange} />
		</Wrapper>
	);
};
