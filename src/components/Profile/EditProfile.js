import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Header from "../Header";
import Loader from "../Loader";
import EditProfileForm from "./EditProfileForm";
import { USER } from "../../queries/client";
import { PROFILE } from "../../queries/profile";

const Wrapper = styled.div`
	padding-bottom: 5rem;

	.flex-wrapper {
		display: flex;
		justify-content: center;

		form {
			.cover-photo {
				margin-bottom: 1rem;
				cursor: pointer;
			}

			.avatar-input {
				margin-top: -100px;
				margin-left: 1rem;
				cursor: pointer;
			}

			div.bio-wrapper {
				background: ${props => props.theme.tertiaryColor2};
				margin-bottom: 1.4rem;
				border-bottom: 1px solid ${props => props.theme.accentColor};
				padding: 0.5rem;

				label {
					color: ${props => props.theme.secondaryColor};
					margin-bottom: 0.4rem;
				}

				textarea {
					font-size: 1rem;
					width: 100%;
					background: ${props => props.theme.tertiaryColor2};
					border: none;
					font-family: ${props => props.theme.font};
					color: ${props => props.theme.primaryColor};
				}
			}
		}
	}
	@media screen and (max-width: 760px) {
		.flex-wrapper {
			display: block;
		}
	}
`;

const EditProfile = () => {
	const {
		data: { user }
	} = useQuery(USER);
	const { data, loading } = useQuery(PROFILE, {
		variables: { handle: user.handle }
	});

	if (loading) return <Loader />;

	return (
		<Wrapper>
			<Header>Edit Profile</Header>
			<div className="flex-wrapper">
				<EditProfileForm profile={data && data.profile} />
			</div>
		</Wrapper>
	);
};

export default EditProfile;
