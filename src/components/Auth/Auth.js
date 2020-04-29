import React, { useState } from "react";
import styled, { css } from "styled-components";
import Login from "./Login";
import Signup from "./Signup";

export const Form = styled.form`
	width: 380px;
	border: 1px solid ${props => props.theme.tertiaryColor};
	padding: 2rem;
	border-radius: 10px;

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

	${props =>
		props.center &&
		css`
			position: absolute;
			top: 50%;
			left: 51%;
			transform: translate(-50%, -50%);
		`}

	${props =>
		props.lg &&
		css`
			width: 600px;
			border: none;
			border-radius: none;

			button {
				width: 100%;
			}
		`}
`;

const Auth = () => {
	const [authAction, setAuthAction] = useState("LOGIN");
	const changeToLogin = () => setAuthAction("LOGIN");
	const changeToSignup = () => setAuthAction("SIGNUP");

	return (
		<>
			{authAction === "LOGIN" ? (
				<Login changeToSignup={changeToSignup} />
			) : (
				<Signup changeToLogin={changeToLogin} />
			)}
		</>
	);
};

export default Auth;
