import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import ProfileInfo from "./ProfileInfo";
import Tweet from "../Tweet/Tweet";
import Loader from "../Loader";
import { PROFILE } from "../../queries/profile";

const Wrapper = styled.div`
	padding-bottom: 5rem;

  .profile-top {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    span.tweetsCount {
      margin-top: 0.1rem;
      color: ${(props) => props.theme.secondaryColor};
      font-size: 0.9rem;
    }
  }
`;

const Profile = () => {
  const { handle } = useParams();

  const { data, loading } = useQuery(PROFILE, {
    variables: { handle },
  });

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <Header>
        <div className="profile-top">
          <span>{data && data.profile && data.profile.fullname}</span>
          <span className="tweetsCount">
            {data && data.profile && data.profile.tweetsCount
              ? `${data.profile.tweetsCount} Tweets`
              : "No Tweets"}
          </span>
        </div>
      </Header>
      <ProfileInfo profile={data && data.profile} />
      {data && data.profile && data.profile.tweets && data.profile.tweets.length
        ? data.profile.tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))
        : null}
    </Wrapper>
  );
};

export default Profile;
