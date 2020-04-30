import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import Avatar from "../../styles/Avatar";
import DeleteComment from "./DeleteComment";

const Wrapper = styled.div`
	display: flex;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};
	padding: 1.5rem 1rem 1rem 1rem;

	.comment-info-user {
		display: flex;

		svg {
			margin-left: 0.6rem;
			position: relative;
			top: 3px;
		}
	}

	.comment-info-user span.username {
		font-weight: 500;
	}

	.comment-info-user span.secondary {
		padding-left: 0.5rem;
		color: ${props => props.theme.secondaryColor};
	}
`;

const Comment = ({ comment }) => {
	const { id, text, isCommentMine, user, createdAt } = comment;

	const handle = user && user.handle;

	return (
		<Wrapper>
			<Avatar src={user && user.avatar} alt="avatar" />
			<div className="comment-info">
				<div className="comment-info-user">
					<Link to={`/${handle}`}>
						<span className="username">{user && user.fullname}</span>
					</Link>
					<span className="secondary">{`@${handle}`}</span>
					<span className="secondary">{moment(createdAt).fromNow()}</span>
					<span>{isCommentMine ? <DeleteComment id={id} /> : null}</span>
				</div>

				<p>{text}</p>
			</div>
		</Wrapper>
	);
};

export default Comment;
