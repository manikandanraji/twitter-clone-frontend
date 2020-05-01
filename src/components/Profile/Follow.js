import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Button from "../../styles/Button";
import { displayError } from "../../utils";
import { FEED, USERS } from "../../queries/others";
import { FOLLOW, UNFOLLOW } from "../../queries/follow";

const Follow = ({ isFollowing, id, sm = false, relative = false }) => {
  const [followState, setFollowState] = useState(isFollowing);

  const [followMutation] = useMutation(FOLLOW, {
    variables: { id },
    refetchQueries: [{ query: FEED }, { query: USERS }],
  });

  const [unfollowMutation] = useMutation(UNFOLLOW, {
    variables: { id },
    refetchQueries: [{ query: FEED }, { query: USERS }],
  });

  const handleFollow = async () => {
    if (followState) {
      setFollowState(false);
      try {
        await unfollowMutation();
      } catch (err) {
        displayError(err);
      }
    } else {
      setFollowState(true);
      try {
        await followMutation();
      } catch (err) {
        displayError(err);
      }
    }
  };

  return (
    <Button outline sm={sm} relative={relative} onClick={handleFollow}>
      {followState ? "Following" : "Follow"}
    </Button>
  );
};

export default Follow;
