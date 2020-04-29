import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { FEED, FOLLOW, UNFOLLOW } from "../queries";
import Button from "../styles/Button";

const Follow = ({ isFollowing, id, sm = false, relative = false }) => {
	const [followState, setFollowState] = useState(isFollowing);

	const [followMutation] = useMutation(FOLLOW, {
		variables: { id },
		refetchQueries: [{ query: FEED }]
	});

	const [unfollowMutation] = useMutation(UNFOLLOW, {
		variables: { id },
		refetchQueries: [{ query: FEED }]
	});

	const handleFollow = async () => {
		if (followState) {
			setFollowState(false);
			await unfollowMutation();
		} else {
			setFollowState(true);
			await followMutation();
		}
	};

	return (
		<Button outline sm={sm} relative={relative} onClick={handleFollow}>
			{followState ? "Following" : "Follow"}
		</Button>
	);
};

export default Follow;
