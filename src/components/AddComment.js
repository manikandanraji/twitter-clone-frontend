import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@apollo/react-hooks";
import useInput from "../hooks/useInput";
import { IMAGE } from "../config";
import Button from "../styles/Button";
import Avatar from "../styles/Avatar";
import { TWEET, ADD_COMMENT } from "../queries";
import { displayError } from "../utils";

const Wrapper = styled.div`
	display: flex;
	padding: 1rem 1rem;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};

	textarea {
		width: 100%;
		background: inherit;
		border: none;
		font-size: 1.23rem;
		font-family: ${props => props.theme.font};
		color: ${props => props.theme.primaryColor};
		margin-bottom: 1.4rem;
	}

	.add-comment {
		display: flex;
		flex-direction: column;
	}

	.add-comment-action
		display: flex;
		align-items: center;
	}
`;

const AddComment = ({ id }) => {
	const comment = useInput("");

	const [addCommentMutation, { loading }] = useMutation(ADD_COMMENT, {
		update: (cache, payload) => {
			const { tweet } = cache.readQuery({
				query: TWEET,
				variables: {
					id
				}
			});

			let comments = tweet.comments;
			comments = [...comments, payload.data.addComment];

			cache.writeQuery({
				query: TWEET,
				data: {
					tweet: { ...tweet, commentsCount: tweet.commentsCount + 1, comments }
				}
			});
		}
	});

	const handleAddComment = async e => {
		e.preventDefault();

		if (!comment.value) return toast("Reply something");

		try {
			await addCommentMutation({
				variables: {
					id,
					text: comment.value
				}
			});

			toast.success("Your reply has been added 🥳");
		} catch (err) {
			return displayError(err);
		}

		comment.setValue("");
	};

	return (
		<Wrapper>
			<Avatar src={IMAGE} alt="user avatar" />

			<form onSubmit={handleAddComment}>
				<div className="add-comment">
					<TextareaAutosize
						cols="48"
						placeholder="Tweet your reply"
						type="text"
						value={comment.value}
						onChange={comment.onChange}
					/>

					<div className="add-comment-action">
						<Button sm disabled={loading}>
							Reply
						</Button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default AddComment;
