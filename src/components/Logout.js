import React from "react";
import { useApolloClient } from '@apollo/react-hooks';
import Button from "../styles/Button";
import { toast } from 'react-toastify';

const Logout = () => {
	const client = new useApolloClient();

	const handleLogout = () => {
		localStorage.clear();
		client.writeData({
			data: {
				isLoggedIn: false
			}
		})
		window.location = "/";
		toast.success('You are logged out.');
	}

	return <Button onClick={handleLogout}>Logout</Button>
};

export default Logout;
