import styled, { css } from "styled-components";

export default styled.button`
	padding: ${props => (props.sm ? "0.4rem 1.2rem" : "0.4rem 1.8rem")};
	color: ${props => (props.outline ? props.theme.accentColor : "#FFF")};
	background: ${props => (props.outline ? "inherit" : props.theme.accentColor)};
	border: 1px solid ${props => props.theme.accentColor};
	border-radius: 50px;
	font-family: "Poppins", sans-serif;
	font-size: ${props => (props.sm ? "0.8rem" : "1rem")};
	letter-spacing: 1px;
	text-transform: uppercase;
	cursor: pointer;
	margin-bottom: 0.5rem;

${props => props.relative && css`
		position: relative;
		left: 340px;
		top: -50px;
	`}
`;
