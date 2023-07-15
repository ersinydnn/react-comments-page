import React, { useState } from "react";
import { Textarea } from "../text-area";
import { Button } from "../button";
import styles from "./styles.module.scss";
function NewCommentEditor({ isReply = false, image, alt, onClick }) {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = ({ target }) => {
    setNewComment(target.value);
  };

  const handleClick = () => {
    onClick(newComment);
    setNewComment("");
  };

  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <Textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="add a comment.."
      />
      <Button variant="primary" onClick={handleClick}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
}

export { NewCommentEditor };
