import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@apollo/react-hooks";
import useInput from "../hooks/useInput";
import { IMAGE } from "../config";
import Button from "../styles/Button";
import { UploadFileIcon } from "./Icons";
import Avatar from "../styles/Avatar";
import { NEW_TWEET } from "../queries";
import { CLOUDINARY_URL } from "../config";
import { displayError } from "../utils";
import { toast } from "react-toastify";

const Wrapper = styled.div`
	display: flex;
	padding: 1rem 1rem;
	border-bottom: 7px solid ${props => props.theme.tertiaryColor};

	textarea {
		width: 100%;
		background: inherit;
		border: none;
		font-size: 1.23rem;
		font-family: ${props => props.theme.font};
		color: ${props => props.theme.primaryColor};
		margin-bottom: 1.4rem;
	}

	.new-tweet {
		display: flex;
		flex-direction: column;
	}

	.new-tweet-action {
		display: flex;
		align-items: center;
	}

	.img-preview {
		width: 500px;
		height: 285px;
		border-radius: 10px;
		object-fit: cover;
		margin: 1rem 0;
	}

	svg {
		width: 24px;
		height: 24px;
		fill: ${props => props.theme.accentColor};
		margin-right: 2rem;
		cursor: pointer;
	}

	button {
		position: relative;
	}
`;

const NewTweet = () => {
	const [tweetFiles, setTweetFiles] = useState([]);
	const tweet = useInput("");

	const [newTweetMutation, { loading }] = useMutation(NEW_TWEET);

	const handleNewTweet = async e => {
		e.preventDefault();

		if (!tweet.value) return toast("Write something");

		const tags = tweet.value.split(" ").filter(str => str.startsWith("#"));

		try {
			await newTweetMutation({
				variables: {
					text: tweet.value,
					tags,
					files: tweetFiles
				}
			});

			toast.success("Your tweet has been posted ");
		} catch (err) {
			return displayError(err);
		}

		tweet.setValue("");
		setTweetFiles([]);
	};

	const handleTweetFiles = async e => {
		const data = new FormData();
		data.append("file", e.target.files[0]);
		data.append("upload_preset", "twitter-build");

		const res = await fetch(`${CLOUDINARY_URL}`, {
			method: "POST",
			body: data
		});
		const file = await res.json();

		setTweetFiles([...tweetFiles, file.secure_url]);
	};

	return (
		<Wrapper>
			<Avatar src={IMAGE} alt="user avatar" />

			<form onSubmit={handleNewTweet}>
				<div className="new-tweet">
					<TextareaAutosize
						cols="48"
						placeholder="What's happening?"
						type="text"
						value={tweet.value}
						onChange={tweet.onChange}
					/>

					{tweetFiles[0] && (
						<img className="img-preview" src={tweetFiles[0]} alt="preview" />
					)}

					<div className="new-tweet-action">
						<div className="svg-input">
							<label htmlFor="file-input">
								<UploadFileIcon />
							</label>
							<input id="file-input" type="file" onChange={handleTweetFiles} />
						</div>
						<Button sm disabled={loading}>
							Tweet
						</Button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default NewTweet;

// 142w, 286h
