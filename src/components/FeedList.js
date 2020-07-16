import React from "react";
import styled from "styled-components";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { FEED } from "../queries/others";
import Loader from "./Loader";
import Tweet from "./Tweet/Tweet";
import CustomResponse from "./CustomResponse";

const Wrapper = styled.div`
  margin-bottom: 7rem;
`;

const FeedList = () => {
  const { data, loading } = useQuery(FEED);
	const client = useApolloClient()

  if (loading) return <Loader />;

	// logout the user if removed from db
	if(data === undefined) {
		localStorage.clear();
		client.writeData({
			data: {
				isLoggedIn: false
			}
		});
	}

  return (
    <Wrapper>
      {data?.feed?.length ? (
        data.feed.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <CustomResponse text="Follow some people to get some feed updates" />
      )}
    </Wrapper>
  );
};

export default FeedList;
