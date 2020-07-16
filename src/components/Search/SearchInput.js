import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useLazyQuery } from "@apollo/react-hooks";
import useInput from "../../hooks/useInput";
import { displayError } from "../../utils";
import {
  SEARCH_BY_USER,
  SEARCH_BY_TAG,
  SEARCH_BY_TWEET,
} from "../../queries/search";
import SearchResult from "./SearchResult";

const Wrapper = styled.div`
  margin: 1rem 0;
  margin-left: 1rem;

  input {
    height: 40px;
    width: 70%;
    border-radius: 30px;
    background: ${(props) => props.theme.tertiaryColor2};
    border: ${(props) => props.theme.tertiaryColor2};
    color: ${(props) => props.theme.secondaryColor};
    font-family: ${(props) => props.theme.font};
    font-size: 1rem;
    padding-left: 1.2rem;
  }

  @media screen and (max-width: 530px) {
    input {
      font-size: 0.9rem;
    }
  }
`;

const SearchInput = () => {
  const term = useInput("");

  const [
    searchByTag,
    { data: searchTagData, loading: searchTagLoading },
  ] = useLazyQuery(SEARCH_BY_TAG);

  const [
    searchByTweet,
    { data: searchTweetData, loading: searchTweetLoading },
  ] = useLazyQuery(SEARCH_BY_TWEET);

  const [
    searchByUser,
    { data: searchUserData, loading: searchUserLoading },
  ] = useLazyQuery(SEARCH_BY_USER);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!term.value) {
      return toast.error("Enter something to search");
    }

    try {
      await searchByTag({ variables: { term: term.value } });
      await searchByTweet({ variables: { term: term.value } });
      await searchByUser({ variables: { term: term.value } });
    } catch (err) {
      displayError(err);
    }
    term.setValue("");
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            placeholder="Search by tags, tweets, people"
            type="text"
            value={term.value}
            onChange={term.onChange}
          />
        </form>
      </Wrapper>
      <SearchResult
        searchTagLoading={searchTagLoading}
        searchTweetLoading={searchTweetLoading}
        searchUserLoading={searchUserLoading}
        tags={searchTagData}
        users={searchUserData}
        tweets={searchTweetData}
      />
    </>
  );
};

export default SearchInput;
