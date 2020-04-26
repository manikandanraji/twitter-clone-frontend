import React, { useState } from "react";
import styled from "styled-components";
import ToggleTheme from ".././ToggleTheme";
import Login from './Login';
import Signup from './Signup';

export const Form = styled.form`
	width: 380px;
	border: 1px solid ${props => props.theme.tertiaryColor};
	padding: 2rem;
	border-radius: 10px;

	position: absolute;
	top: 50%;
	left: 51%;
	transform: translate(-50%, -50%);

	button {
		width: 93%;
	}

	span {
		text-align: center;
		display: block;
		margin-bottom: 0.5rem;
		color: ${props => props.theme.secondaryColor};
	}

	.group-input {
		display: flex;
		justify-content: space-between;

		div:nth-child(1) {
			margin-right: 1rem;
		}
	}
`;

const Auth = () => {
	const [authAction, setAuthAction] = useState("LOGIN");
	const changeToLogin = () => setAuthAction("LOGIN");
	const changeToSignup = () => setAuthAction("SIGNUP");

	return (
		<>
			<ToggleTheme />
			{authAction === "LOGIN" ? (
				<Login changeToSignup={changeToSignup} />
			) : (
				<Signup changeToLogin={changeToLogin} />
			)}
		</>
	);
};

export default Auth;
