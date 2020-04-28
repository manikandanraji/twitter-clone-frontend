import React from "react";
import styled from "styled-components";
import moment from "moment";
import Avatar from "../styles/Avatar";
import { NOAVATAR } from "../config";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};
	padding: 1rem;

	.tweet-info-user span.username {
		font-weight: bold;
	}

	.tweet-info-user span.secondary {
		padding-left: 0.5rem;
		color: ${props => props.theme.secondaryColor};
	}

	span.tag {
		color: ${props => props.theme.accentColor};
		margin-right: 0.4rem;
	}

	img.tweet-file {
		width: 500px;
		height: 285px;
		border-radius: 10px;
		object-fit: cover;
		margin: 0.5rem 0;
	}
`;

const Tweet = ({ tweet }) => {
	const {
		// id,
		text,
		tags,
		user,
		files,
		// likesCount,
		// commentsCount,
		// retweetsCount,
		createdAt
	} = tweet;

	const strList = text.split(" ");
	const processedText = strList.filter(str => !str.startsWith("#")).join(" ");

	return (
		<Wrapper>
			<Avatar src={NOAVATAR} alt="avatar" />

			<div className="tweet-info">
				<div className="tweet-info-user">
					<span className="username">{user && user.fullname}</span>
					<span className="secondary">{user && `@${user.handle}`}</span>
					<span className="secondary">
						{moment(createdAt).startOf("hour").fromNow()}
					</span>
				</div>

				<p>{processedText}</p>

				<div>
					{tags && tags.length
						? tags.map(tag => <span className="tag">{tag}</span>)
						: null}
				</div>

				{files && files.length && files[0] ? (
					<img className="tweet-file" src={files[0].url} alt="tweet-file" />
				) : null}
			</div>
		</Wrapper>
	);
};

export default Tweet;
