import React from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { TWEET } from "../../queries/tweet";
import { DELETE_COMMENT } from "../../queries/comment";
import { TrashIcon } from "../Icons";

const DeleteComment = ({ id }) => {
  const { tweetId } = useParams();

  const [deleteCommentMutation, { loading }] = useMutation(DELETE_COMMENT, {
    variables: { id },
    update: (cache, { data: { deleteComment } }) => {
      const { tweet } = cache.readQuery({
        query: TWEET,
        variables: { id: tweetId },
      });

      cache.writeQuery({
        query: TWEET,
        data: {
          tweet: {
            ...tweet,
            commentsCount: tweet.commentsCount - 1,
            comments: tweet.comments.filter(
              (comment) => comment.id !== deleteComment.id
            ),
          },
        },
      });
    },
  });

  const handleDeleteComment = async () => {
    await deleteCommentMutation();
    toast.success("Your comment has been deleted");
  };

  return <TrashIcon loading={loading} onClick={handleDeleteComment} />;
};

export default DeleteComment;
