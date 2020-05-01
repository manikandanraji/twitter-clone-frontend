import gql from "graphql-tag";

export const FEED = gql`
  query feed {
    feed {
      id
      text
      tags
      isLiked
      isTweetMine
      likesCount
      commentsCount
      retweetsCount
      isRetweet
      files {
        id
        url
      }
      user {
        id
        avatar
        handle
        fullname
      }
      createdAt
    }
  }
`;

export const USERS = gql`
  query users {
    users {
      id
      handle
      isFollowing
      isSelf
      fullname
      avatar
    }
  }
`;
