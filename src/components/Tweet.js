import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import DeleteTweet from "./DeleteTweet";
import LikeTweet from "./LikeTweet";
import Retweet from "./Retweet";
import { CommentIcon } from "./Icons";
import Avatar from '../styles/Avatar';

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
	const handle = user && user.handle;

	return (
		<Wrapper>
			<Avatar src={user && user.avatar} alt="avatar" />
			<div className="tweet-info">
				<div className="tweet-info-user">
					<Link to={`/${handle}`}>
						<span className="username">{user && user.fullname}</span>
					</Link>
					<span className="secondary">{`@${handle}`}</span>
					<span className="secondary">{moment(createdAt).fromNow()}</span>
				</div>

				<Link to={`/${handle}/status/${id}`}>
					<p>{processedText}</p>
				</Link>

				<div className="tags">
					{tags && tags.length
						? tags.map(tag => (
								<span key={tag} className="tag">
									{tag}
								</span>
						  ))
						: null}
				</div>

				<Link to={`/${handle}/status/${id}`}>
					{files && files.length && files[0] ? (
						<img className="tweet-file" src={files[0].url} alt="tweet-file" />
					) : null}
				</Link>

				<div className="tweet-stats">
					<div>
						<span>
							<Link to={`/${handle}/status/${id}`}>
								<CommentIcon />
								{commentsCount ? commentsCount : null}
							</Link>
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
