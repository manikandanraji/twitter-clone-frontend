import React, { useContext } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { UserIcon } from "../Icons";
import { ThemeContext } from "../../context/ThemeContext";
import { Wrapper } from "../ToggleTheme";

const Logout = () => {
	const { theme } = useContext(ThemeContext);

	const client = new useApolloClient();

	const handleLogout = () => {
		localStorage.clear();
		client.writeData({
			data: {
				isLoggedIn: false
			}
		});
		setTimeout(() => {
			window.location = "/";
		}, 2100);
		toast.success("You are logged out");
	};

	return (
		<Wrapper onClick={handleLogout}>
			<UserIcon sm color={theme.accentColor} />
			<p>Logout</p>
		</Wrapper>
	);
};

export default Logout;
