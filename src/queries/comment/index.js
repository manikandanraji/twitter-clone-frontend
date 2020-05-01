import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation addComment($id: ID!, $text: String!) {
    addComment(id: $id, text: $text) {
      id
      text
      isCommentMine
      user {
        id
        handle
        avatar
        fullname
      }
      createdAt
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;
