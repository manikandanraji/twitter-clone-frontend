import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { USERS } from "../queries";
import Loader from "./Loader";
import Header from "./Header";
import Avatar from "../styles/Avatar";
import Follow from "./Follow";

const Wrapper = styled.div`
	width: 350px;
	background: ${props => props.theme.tertiaryColor2};
	border-radius: 10px;
	box-shadow: ${props => props.theme.bs1};

	div:last-child {
		border-bottom: none;
	}
`;

const UserWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};
	font-size: 0.9rem;

	button {
		position: absolute;
		top: 20px;
		left: 220px;
	}

	.avatar-handle {
		display: flex;

		img {
			margin-right: 1rem;
		}
	}

	.handle-fullname {
		display: flex;
		flex-direction: column;

		span.secondary {
			color: ${props => props.theme.secondaryColor};
		}
	}
`;

const User = ({ user }) => (
	<UserWrapper>
		<div className="avatar-handle">
			<Avatar src={user && user.avatar} alt="avatar" />
			<div className="handle-fullname">
				<span>{user && user.fullname}</span>
				<span className="secondary">@{user && user.handle}</span>
			  <Follow sm id={user && user.id} isFollowing={user && user.isFollowing} />
			</div>
		</div>
	</UserWrapper>
);

const WhoToFollow = () => {
	const { data, loading } = useQuery(USERS);

	if (loading) return <Loader />;

	return (
		<Wrapper>
			<Header>Who to follow</Header>
			{data &&
				data.users &&
				data.users.length &&
				data.users.map(user => <User key={user.id} user={user} />)}
		</Wrapper>
	);
};

export default WhoToFollow;
