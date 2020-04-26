import React from "react";
import useInput from "../../hooks/useInput";
import Input from ".././Input";
import Button from "../../styles/Button";
import { Form } from './Auth';

export default ({ changeToLogin }) => {
	const firstname = useInput("");
	const lastname = useInput("");
	const handle = useInput("");
	const email = useInput("");
	const password = useInput("");

	const handleLogin = e => {
		e.preventDefault();

		console.log(
			email.value,
			password.value,
			handle.value,
			firstname.value,
			lastname.value
		);

		firstname.setValue("");
		lastname.setValue("");
		handle.setValue("");
		email.setValue("");
		password.setValue("");
	};

	return (
		<Form onSubmit={handleLogin}>
			<div className="group-input">
				<Input
					text="First Name"
					value={firstname.value}
					onChange={firstname.onChange}
				/>
				<Input
					text="Last Name"
					value={lastname.value}
					onChange={lastname.onChange}
				/>
			</div>
			<Input text="Handle" value={handle.value} onChange={handle.onChange} />
			<div className="group-input">
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
			</div>
			<Button outline type="submit">
				Signup
			</Button>
			<span>or</span>
			<Button type="button" onClick={changeToLogin}>
				Login
			</Button>
		</Form>
	);
};
