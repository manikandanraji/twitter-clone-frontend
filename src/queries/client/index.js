import gql from "graphql-tag";

// client query
export const USER_LOGGED_IN = gql`
  query userLoggedIn {
    isLoggedIn
  }
`;

// client query
export const USER = gql`
  query user {
    user {
      id
      handle
      avatar
      fullname
    }
  }
`;
