import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { FEED, DELETE_TWEET } from "../queries";
import { TrashIcon } from "./Icons";

const DeleteTweet = ({ id }) => {
	const [deleteTweetMutation, { loading }] = useMutation(DELETE_TWEET, {
		variables: { id },
		update: (cache, { data: { deleteTweet } }) => {
			const { feed } = cache.readQuery({ query: FEED });
			cache.writeQuery({
				query: FEED,
				data: {
					feed: feed.filter(tweet => tweet.id !== deleteTweet.id)
				}
			});
		}
	});

	const handleDeleteTweet = async () => {
		await deleteTweetMutation();
		toast.success("Your tweet has been deleted 😉");
	};

	return <TrashIcon loading={loading} onClick={handleDeleteTweet} />;
};

export default DeleteTweet;
