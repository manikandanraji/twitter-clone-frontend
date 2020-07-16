import React, { useState } from "react";
import styled from "styled-components";
import SearchResultTweets from "./SearchResultTweets";
import SearchResultTags from "./SearchResultTags";
import SearchResultUsers from "./SearchResultUsers";

const Wrapper = styled.div`
	.tabs {
		display: flex;
		justify-content: space-around;
		border-bottom: 2px solid ${props => props.theme.tertiaryColor};
	}

	span {
		cursor: pointer;
		margin-bottom: 0.4rem;
	}

	span.active {
		border-bottom: 2px solid ${props => props.theme.accentColor};
		font-weight: 500;
		color: ${props => props.theme.accentColor};
	}
`;

const SearchResult = ({
	searchTweetLoading,
	searchUserLoading,
	searchTagLoading,
	tags,
	users,
	tweets
}) => {
	const [searchResultAction, setSearchResultAction] = useState("TWEETS");

	const changeToTweets = () => setSearchResultAction("TWEETS");
	const changeToTags = () => setSearchResultAction("TAGS");
	const changeToUsers = () => setSearchResultAction("USERS");

	return (
		<Wrapper>
			<div className="tabs">
				<span
					className={searchResultAction === "TWEETS" ? "active" : ""}
					onClick={changeToTweets}
				>
					Tweets
				</span>
				<span
					className={searchResultAction === "TAGS" ? "active" : ""}
					onClick={changeToTags}
				>
					Tags
				</span>
				<span
					className={searchResultAction === "USERS" ? "active" : ""}
					onClick={changeToUsers}
				>
					Users
				</span>
			</div>

			{searchResultAction === "TWEETS" && (
				<SearchResultTweets tweets={tweets} loading={searchTweetLoading} />
			)}
			{searchResultAction === "TAGS" && (
				<SearchResultTags tags={tags} loading={searchTagLoading} />
			)}
			{searchResultAction === "USERS" && (
				<SearchResultUsers users={users} loading={searchUserLoading} />
			)}
		</Wrapper>
	);
};

export default SearchResult;
