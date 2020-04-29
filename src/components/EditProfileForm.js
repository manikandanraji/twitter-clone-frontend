import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import useInput from "../hooks/useInput";
import Input from "./Input";
import Button from "../styles/Button";
import { Form } from "./Auth/Auth";
import { PROFILE, EDIT_PROFILE } from "../queries";
import { displayError } from "../utils";
import CoverPhoto from '../styles/CoverPhoto';
import Avatar from '../styles/Avatar';
import { uploadImage } from '../utils';

const EditProfileForm = ({ profile, history }) => {
	const [ avatarState, setAvatar ] = useState('');
	const [ coverPhotoState, setCoverPhoto ] = useState('');

	const firstname = useInput(profile && profile.firstname);
	const lastname = useInput(profile && profile.lastname);
	const location = useInput(profile && profile.location);
	const website = useInput(profile && profile.website);
	const dob = useInput(profile && profile.dob);
	const avatar = useInput(profile && profile.avatar);
	const bio = useInput(profile && profile.bio);
	const coverPhoto = useInput(profile && profile.coverPhoto);

	const handle = profile && profile.handle;

	const [editProfileMutation, { loading }] = useMutation(EDIT_PROFILE, {
		refetchQueries: [
			{ query: PROFILE, variables: { handle } }
		]
	});

	const handleEditProfile = async e => {
		e.preventDefault();

		try {
			await editProfileMutation({
				variables: {
					firstname: firstname.value,
					lastname: lastname.value,
					dob: dob.value,
					bio: bio.value,
					location: location.value,
					website: website.value,
					avatar: avatarState ? avatarState : avatar.value,
					coverPhoto: coverPhotoState ? coverPhotoState : coverPhoto.value
				}
			});

			toast.success("Your profile has been updated 🥳");
		} catch (err) {
			return displayError(err);
		}

		[
			firstname,
			lastname,
			dob,
			location,
			website,
			avatar,
			coverPhoto
		].map(field => field.setValue(""));

		history.push(`/${handle}`)
	};

	const handleCoverPhoto = async e => {
		setCoverPhoto(await uploadImage(e.target.files[0]))
	}

	const handleAvatar = async e => {
		console.log(e.target.files);
		setAvatar(await uploadImage(e.target.files[0]))
	}

	return (
		<Form lg onSubmit={handleEditProfile}>
			<div className="cover-photo">
				<label htmlFor="cover-photo-input">
					<CoverPhoto src={coverPhotoState ? coverPhotoState : coverPhoto.value} alt="cover"/>
				</label>
				<input type="file" id="cover-photo-input" onChange={handleCoverPhoto}/>
			</div>

			<div className="avatar-input">
				<label htmlFor="avatar-input-file">
					<Avatar lg src={avatarState ? avatarState : avatar.value} alt="avatar"/>
				</label>
				<input type="file" id="avatar-input-file" onChange={handleAvatar}/>
			</div>

			<div className="group-input">
				<Input
					lg={true}
					text="First Name"
					value={firstname.value}
					onChange={firstname.onChange}
				/>
				<Input
					lg={true}
					text="Last Name"
					value={lastname.value}
					onChange={lastname.onChange}
				/>
			</div>
			<Input
				lg={true}
				text="Bio"
				value={bio.value}
				onChange={bio.onChange}
			/>
			<Input
				lg={true}
				text="Website"
				value={website.value}
				onChange={website.onChange}
			/>
			<Input
				lg={true}
				text="Date of Birth"
				value={dob.value}
				onChange={dob.onChange}
			/>
			<Input
				lg={true}
				text="Location"
				value={location.value}
				onChange={location.onChange}
			/>
			<Button outline disabled={loading} type="submit">
				{loading ? "Saving" : "Save"}
			</Button>
		</Form>
	);
};

export default withRouter(EditProfileForm);
