import React from "react";
import styled from "styled-components";
import moment from "moment";
import Avatar from "../styles/Avatar";
import { NOAVATAR } from "../config";
import DeleteTweet from "./DeleteTweet";
import LikeTweet from "./LikeTweet";
import Retweet from "./Retweet";
import { CommentIcon } from "./Icons";

const Wrapper = styled.div`
	display: flex;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};
	padding: 1.5rem 1rem 1rem 1rem;

	span.retweet {
		display: flex;
		align-items: center;
		position: absolute;
		top: 4px;
		left: 70px;
		color: ${props => props.theme.secondaryColor};
		font-size: 0.85rem;

		svg {
			margin-right: 0.4rem;
		}
	}

	.tweet-info-user {
		display: flex;
	}

	.tweet-info-user span.username {
		font-weight: 500;
	}

	.tweet-info-user span.secondary {
		padding-left: 0.5rem;
		color: ${props => props.theme.secondaryColor};
	}

	.tags {
		display: flex;
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
		margin-top: 0.5rem;
	}

	div.tweet-stats {
		display: flex;
		margin-top: 0.5rem;
		align-items: center;

		div {
			margin-right: 4rem;
			color: ${props => props.theme.secondaryColor};
		}

		svg {
			margin-right: 0.5rem;
		}

		span {
			display: flex;
			align-items: center;
		}
	}
`;

const Tweet = ({ tweet }) => {
	const {
		id,
		text,
		tags,
		user,
		files,
		isTweetMine,
		isLiked,
		likesCount,
		isRetweet,
		retweetsCount,
		commentsCount,
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

				<div className="tags">
					{tags && tags.length
						? tags.map(tag => (
								<span key={tag} className="tag">
									{tag}
								</span>
						  ))
						: null}
				</div>

				{files && files.length && files[0] ? (
					<img className="tweet-file" src={files[0].url} alt="tweet-file" />
				) : null}

				<div className="tweet-stats">
					<div>
						<span>
							<CommentIcon />
							{commentsCount ? commentsCount : null}
						</span>
					</div>

					<div>
						<Retweet
							id={id}
							isRetweet={isRetweet}
							retweetsCount={retweetsCount}
						/>
					</div>

					<div>
						<LikeTweet id={id} isLiked={isLiked} likesCount={likesCount} />
					</div>

					<div>
						<span>{isTweetMine ? <DeleteTweet id={id} /> : null}</span>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Tweet;
