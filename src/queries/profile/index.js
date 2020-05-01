import gql from "graphql-tag";

export const PROFILE = gql`
  query profile($handle: String!) {
    profile(handle: $handle) {
      id
      handle
      firstname
      lastname
      fullname
      avatar
      coverPhoto
      dob
      location
      website
      isSelf
      isFollowing
      followersCount
      followingCount
      tweetsCount
      bio
      tweets {
        id
        text
        tags
        isTweetMine
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
        createdAt
      }
      createdAt
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editProfile(
    $firstname: String
    $lastname: String
    $location: String
    $dob: String
    $bio: String
    $website: String
    $avatar: String
    $coverPhoto: String
  ) {
    editProfile(
      firstname: $firstname
      lastname: $lastname
      location: $location
      dob: $dob
      bio: $bio
      website: $website
      avatar: $avatar
      coverPhoto: $coverPhoto
    ) {
      id
    }
  }
`;
