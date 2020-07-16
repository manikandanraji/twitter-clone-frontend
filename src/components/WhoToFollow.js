import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Loader from "./Loader";
import Header from "./Header";
import Avatar from "../styles/Avatar";
import Follow from "./Profile/Follow";
import { USERS } from "../queries/others";
import Button from "../styles/Button";

const Wrapper = styled.div`
	margin-left: 0.4rem;
	width: 350px;
	background: ${props => props.theme.tertiaryColor2};
	border-radius: 10px;

	div:last-child {
		border-bottom: none;
	}
`;

const UserWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};
	font-size: 0.9rem;

	button {
		align-self: flex-start;
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

		span:first-child {
			font-weight: 500;
		}

		span.secondary {
			color: ${props => props.theme.secondaryColor};
		}
	}
`;

export const User = ({ user }) => (
	<UserWrapper>
		<div className="avatar-handle">
			<Link to={`/${user && user.handle}`}>
				<Avatar src={user && user.avatar} alt="avatar" />
			</Link>

			<div className="handle-fullname">
				<Link to={`/${user && user.handle}`}>
					<span>{user && user.fullname}</span>
				</Link>
				<span className="secondary">@{user && user.handle}</span>
			</div>
		</div>

		{user && !user.isSelf ? (
			<Follow sm id={user && user.id} isFollowing={user && user.isFollowing} />
		) : (
			<Link to="/settings/profile">
				<Button sm outline className="action-btn">
					Edit Profile
				</Button>
			</Link>
		)}
	</UserWrapper>
);

const WhoToFollow = () => {
	const { data, loading } = useQuery(USERS);

	if (loading) return <Loader />;

	return (
		<Wrapper>
			<Header>Who to follow</Header>
			{data.users.map(user => (
				<User key={user.id} user={user} />
			))}
		</Wrapper>
	);
};

export default WhoToFollow;
