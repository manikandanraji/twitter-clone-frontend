import gql from "graphql-tag";

// client query
export const USER_LOGGED_IN = gql`
	query userLoggedIn {
		isLoggedIn
	}
`;

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
			}
		}
	}
`;

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

export const USERS = gql`
	query users {
		users {
			id
			handle
			isFollowing
			fullname
			avatar
		}
	}
`;
