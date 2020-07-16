import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import CustomResponse from "../CustomResponse";
import Tweet from "../Tweet/Tweet";

const Wrapper = styled.div`
  position: relative;
`;

const SearchResultTags = ({ loading, tags }) => {
  if (loading) return <Loader />;

  if (tags === undefined)
    return (
      <CustomResponse text="Use the search bar to find tags, people and tweets" />
    );

  return (
    <Wrapper>
      {tags?.searchByTag?.length ? (
        tags.searchByTag.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <CustomResponse text="No tweets found for that tag, try a different search" />
      )}
    </Wrapper>
  );
};

export default SearchResultTags;
