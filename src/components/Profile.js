import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";
import Tweet from "./Tweet";
import { PROFILE } from "../queries";
import Loader from "./Loader";

const Wrapper = styled.div`
	position: relative;
	height: 100vh;

	.profile-top {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;

		span.tweetsCount {
			margin-top: 0.1rem;
			color: ${props => props.theme.secondaryColor};
			font-size: 0.9rem;
		}
	}
`;

const Profile = () => {
	const { handle } = useParams();
	const { data, loading } = useQuery(PROFILE, { variables: { handle } });
	console.log(data);

	if (loading) return <Loader />;

	return (
		<Wrapper>
			<Header>
				<div className="profile-top">
					<span>{data && data.profile && data.profile.fullname}</span>
					<span className="tweetsCount">
						{data && data.profile && data.profile.tweetsCount} Tweets
					</span>
				</div>
			</Header>
			<ProfileHeader profile={data && data.profile} />
			{data &&
				data.profile &&
				data.profile.tweets &&
				data.profile.tweets.length &&
				data.profile.tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
		</Wrapper>
	);
};

export default Profile;
