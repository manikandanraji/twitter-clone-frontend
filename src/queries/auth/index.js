import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        handle
        avatar
        fullname
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup(
    $firstname: String!
    $lastname: String!
    $handle: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstname: $firstname
      lastname: $lastname
      handle: $handle
      email: $email
      password: $password
    ) {
      token
      user {
        id
        handle
        avatar
        fullname
        avatar
      }
    }
  }
`;
