import gql from "graphql-tag";

export const NEW_TWEET = gql`
  mutation newTweet($text: String!, $files: [String!]!, $tags: [String!]!) {
    newTweet(text: $text, files: $files, tags: $tags) {
      id
      text
      tags
      isLiked
      likesCount
      commentsCount
      createdAt
    }
  }
`;

export const DELETE_TWEET = gql`
  mutation deleteTweet($id: ID!) {
    deleteTweet(id: $id) {
      id
    }
  }
`;

export const TOGGLE_LIKE = gql`
  mutation toggleLike($id: ID!) {
    toggleLike(id: $id)
  }
`;

export const TOGGLE_RETWEET = gql`
  mutation toggleRetweet($id: ID!) {
    toggleRetweet(id: $id)
  }
`;

export const TWEET = gql`
  query tweet($id: ID!) {
    tweet(id: $id) {
      id
      text
      tags
      user {
        id
        fullname
        handle
        avatar
      }
      files {
        id
        url
      }
      likesCount
      commentsCount
      retweetsCount
      isLiked
      isRetweet
      comments {
        id
        text
        isCommentMine
        user {
          id
          fullname
          handle
          avatar
        }
        createdAt
      }
      createdAt
    }
  }
`;
