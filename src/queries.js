import gql from "graphql-tag";

// client query
export const USER_LOGGED_IN = gql`
	query userLoggedIn {
		isLoggedIn
	}
`;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id
				handle
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
