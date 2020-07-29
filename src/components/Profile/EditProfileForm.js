import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import Input from "../Input";
import Button from "../../styles/Button";
import Form from "../../styles/Form";
import { displayError } from "../../utils";
import CoverPhoto from "../../styles/CoverPhoto";
import Avatar from "../../styles/Avatar";
import { uploadImage } from "../../utils";
import { PROFILE, EDIT_PROFILE } from "../../queries/profile";

const EditProfileForm = ({ profile, history }) => {
  const [avatarState, setAvatar] = useState("");
  const [coverPhotoState, setCoverPhoto] = useState("");

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
    refetchQueries: [{ query: PROFILE, variables: { handle } }],
  });

  const handleEditProfile = async (e) => {
    e.preventDefault();

    if (!firstname.value || !lastname.value) {
      return toast.error("You cannot leaveout firstname/lastname empty");
    }

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
          coverPhoto: coverPhotoState ? coverPhotoState : coverPhoto.value,
        },
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
      coverPhoto,
    ].map((field) => field.setValue(""));

    history.push(`/${handle}`);
  };

  const handleCoverPhoto = async (e) => {
    setCoverPhoto(await uploadImage(e.target.files[0]));
  };

  const handleAvatar = async (e) => {
    setAvatar(await uploadImage(e.target.files[0]));
  };

  return (
    <Form lg onSubmit={handleEditProfile}>
      <div className="cover-photo">
        <label htmlFor="cover-photo-input">
          <CoverPhoto
            src={coverPhotoState ? coverPhotoState : coverPhoto.value}
            alt="cover"
          />
        </label>
        <input type="file" id="cover-photo-input" accept="image/*" onChange={handleCoverPhoto} />
      </div>

      <div className="avatar-input">
        <label htmlFor="avatar-input-file">
          <Avatar
            lg
            src={avatarState ? avatarState : avatar.value}
            alt="avatar"
          />
        </label>
        <input type="file" accept="image/*" id="avatar-input-file" onChange={handleAvatar} />
      </div>

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
      <div className="bio-wrapper">
        <label className="bio" htmlFor="bio">
          Bio
        </label>
        <TextareaAutosize
          id="bio"
          placeholder="Bio"
          value={bio.value}
          onChange={bio.onChange}
        />
      </div>
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
