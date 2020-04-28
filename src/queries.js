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
		}
	}
`;

export const FEED = gql`
	query feed {
		feed {
			id
			text
			tags
			likesCount
			retweetsCount
			commentsCount
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
