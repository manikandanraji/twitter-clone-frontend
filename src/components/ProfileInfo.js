import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CoverPhoto from "../styles/CoverPhoto";
import Avatar from "../styles/Avatar";
import Button from "../styles/Button";
import Follow from "./Follow";
import { DobIcon, LocationIcon, LinkIcon } from "./Icons";

const Wrapper = styled.div`
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};
	padding-bottom: 1rem;

	.avatar {
		margin-left: 1.4rem;
		margin-top: -4rem;
	}

	.action-btn {
		position: relative;
		left: 340px;
		top: -50px;
	}

	.profile-name-handle {
		display: flex;
		flex-direction: column;
		margin-left: 1.4rem;
		position: relative;
		top: -16px;

		span.fullname {
			font-weight: bold;
		}

		span.handle {
			margin-top: 0.1rem;
			color: ${props => props.theme.secondaryColor};
		}
	}

	.profile-info {
		padding-left: 1.4rem;
	}

	div.loc-dob-web {
		color: ${props => props.theme.secondaryColor};
		margin: 0.6rem 0;

		span {
			margin-right: 1.5rem;
		}

		svg {
			margin-right: 0.2rem;
			position: relative;
			top: 3px;
		}
	}

	div.follow-following {
		color: ${props => props.theme.secondaryColor};
		span {
			margin-right: 1.3rem;
		}
	}
`;

const ProfileInfo = ({ profile }) => {
	const {
		id,
		coverPhoto,
		avatar,
		bio,
		location,
		website,
		isSelf,
		dob,
		isFollowing,
		followersCount,
		followingCount,
		handle,
		fullname
	} = profile;

	return (
		<Wrapper>
			<CoverPhoto src={coverPhoto} alt="cover" />
			<Avatar className="avatar" lg src={avatar} alt="profile" />

			{isSelf ? (
				<Link to="/settings/profile">
					<Button outline className="action-btn">Edit Profile</Button>
				</Link>
			) : (
				<Follow
					relative
					className="action-btn"
					isFollowing={isFollowing}
					id={id}
				/>
			)}

			<div className="profile-name-handle">
				<span className="fullname">{fullname}</span>
				<span className="handle">{`@${handle}`}</span>
			</div>

			<div className="profile-info">
				<p>{bio}</p>

				<div className="loc-dob-web">
					<span>
						<LocationIcon /> {location}
					</span>
					<span>
						<LinkIcon /> {website}
					</span>
					<span>
						<DobIcon />
						{dob}
					</span>
				</div>

				<div className="follow-following">
					<span>{followersCount ? followersCount : "No"} Followers</span>
					<span>{followingCount ? followingCount : "Not"} Following</span>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileInfo;
