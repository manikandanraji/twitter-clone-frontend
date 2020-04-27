import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import Input from ".././Input";
import Button from "../../styles/Button";
import { Form } from "./Auth";
import { SIGNUP } from "../../queries";
import { displayError } from '../../utils';

export default ({ changeToLogin }) => {
	const firstname = useInput("");
	const lastname = useInput("");
	const handle = useInput("");
	const email = useInput("");
	const password = useInput("");

	const [signupMutation, { loading }] = useMutation(SIGNUP, {
		update: (cache, { data: { signup } }) => {
			localStorage.setItem('token', signup.token);
			cache.writeData({
				data: { isLoggedIn: true }
			})
		}
	});

	const handleSignup = async e => {
		e.preventDefault();

		if (
			!firstname.value ||
			!lastname.value ||
			!handle.value ||
			!email.value ||
			!password.value
		) {
			return toast.error("You need to fill in all the fields 😈");
		}

		try {
			await signupMutation({
				variables: {
					firstname: firstname.value,
					lastname: lastname.value,
					handle: handle.value,
					email: email.value,
					password: password.value
				}
			});

			toast.success("You are logged in 🥳");
		} catch (err) {
			return displayError(err);
		}

		[firstname, lastname, handle, email, password].map(field =>
			field.setValue("")
		);
	};

	return (
		<Form onSubmit={handleSignup}>
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
			<Button outline disabled={loading} type="submit">
				{loading ? "Signing in" : "Sign up"}
			</Button>
			<span>or</span>
			<Button type="button" onClick={changeToLogin}>
				Login
			</Button>
		</Form>
	);
};
