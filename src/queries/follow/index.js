import gql from "graphql-tag";

export const FOLLOW = gql`
  mutation follow($id: ID!) {
    follow(id: $id)
  }
`;

export const UNFOLLOW = gql`
  mutation unfollow($id: ID!) {
    unfollow(id: $id)
  }
`;
