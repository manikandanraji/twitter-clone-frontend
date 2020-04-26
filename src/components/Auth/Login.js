import React from "react";
import useInput from "../../hooks/useInput";
import Input from ".././Input";
import Button from "../../styles/Button";
import { Form } from './Auth';

export default ({ changeToSignup }) => {
	const email = useInput("");
	const password = useInput("");

	const handleLogin = e => {
		e.preventDefault();
		console.log(email.value, password.value);
		email.setValue("");
		password.setValue("");
	};

	return (
		<Form onSubmit={handleLogin}>
			<Input
				text="Email"
				type="email"
				value={email.value}
				onChange={email.onChange}
			/>
			<Input
				text="Password"
				type="password"
				value={password.value}
				onChange={password.onChange}
			/>
			<Button outline type="submit">
				Login
			</Button>
			<span>or</span>
			<Button type="button" onClick={changeToSignup}>
				Signup
			</Button>
		</Form>
	);
};
