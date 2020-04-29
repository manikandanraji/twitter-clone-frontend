import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Header from "./Header";
import { USER, PROFILE } from "../queries";
import Loader from "./Loader";
import EditProfileForm from "./EditProfileForm";

const Wrapper = styled.div`
	height: 100vh;
	border-left: ${props => props.theme.tertiaryColor};

	.flex-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

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
