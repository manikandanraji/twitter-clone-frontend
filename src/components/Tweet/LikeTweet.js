import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { HeartIcon, HeartFillIcon } from "../Icons";
import { TOGGLE_LIKE } from "../../queries/tweet";

const LikeTweet = ({ id, isLiked, likesCount }) => {
  const [liked, setLiked] = useState(isLiked);
  const [likesCountState, setLikesCount] = useState(likesCount);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, { variables: { id } });

  const handleToggleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikesCount(likesCountState - 1);
    } else {
      setLikesCount(likesCountState + 1);
    }
    toggleLikeMutation();
  };

  return (
    <span>
      {liked ? (
        <HeartFillIcon color="#E0245E" onClick={handleToggleLike} />
      ) : (
        <HeartIcon onClick={handleToggleLike} />
      )}
      {likesCountState ? likesCountState : null}
    </span>
  );
};

export default LikeTweet;
