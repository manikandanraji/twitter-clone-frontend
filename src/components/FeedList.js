import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { FEED } from "../queries";
import Loader from "./Loader";
import Tweet from "./Tweet";

const Wrapper = styled.div`
	position: relative;
`;

const FeedList = () => {
	const { data, loading } = useQuery(FEED);
	console.log(data);

	if (loading) return <Loader />;

	return (
		<Wrapper>
			{data &&
				data.feed &&
				data.feed.length &&
				data.feed.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
		</Wrapper>
	);
};

export default FeedList;
