import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { RetweetIcon, RtFillIcon } from "../Icons";
import { TOGGLE_RETWEET } from "../../queries/tweet";
import { displayError } from "../../utils";

const Retweet = ({ id, isRetweet, retweetsCount }) => {
  const [retweet, setRetweet] = useState(isRetweet);
  const [retweetsCountState, setRetweetsCount] = useState(retweetsCount);
  const [toggleRetweetMutation, { loading }] = useMutation(TOGGLE_RETWEET, {
    variables: { id },
  });

  const handleRetweet = async () => {
    try {
      await toggleRetweetMutation();
      setRetweet(!retweet);
      if (retweet) {
        setRetweetsCount(retweetsCountState - 1);
        toast.success("Retweet removed");
      } else {
        setRetweetsCount(retweetsCountState + 1);
        toast.success("Retweet done");
      }
    } catch (err) {
      return displayError(err);
    }
  };

  return (
    <span>
      {retweet ? (
        <RtFillIcon loading={loading} color="#17BF63" onClick={handleRetweet} />
      ) : (
        <RetweetIcon loading={loading} onClick={handleRetweet} />
      )}
      {retweetsCountState ? retweetsCountState : null}
    </span>
  );
};

export default Retweet;
