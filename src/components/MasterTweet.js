import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Header from "./Header";
import { TWEET } from "../queries";
import Loader from "./Loader";
import Tweet from "./Tweet";
import Comment from "./Comment";
import AddComment from './AddComment';
import { sortFn } from '../utils';

const Wrapper = styled.div``;

const MasterTweet = () => {
	const { tweetId } = useParams();

	const { data, loading } = useQuery(TWEET, { variables: { id: tweetId } });

	const comments =
		data && data.tweet && data.tweet.comments && data.tweet.comments.length
			? data.tweet.comments
			: [];
	comments.sort(sortFn);

	return (
		<Wrapper>
			<Header>
				<span>Tweet</span>
			</Header>
			{loading ? (
				<Loader />
			) : (
				<>
					<Tweet tweet={data && data.tweet} />
					<AddComment id={data && data.tweet && data.tweet.id}/>
					{comments.map(comment => (
						<Comment key={comment.id} comment={comment} />
					))}
				</>
			)}
		</Wrapper>
	);
};

export default MasterTweet;
