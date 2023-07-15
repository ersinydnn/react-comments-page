import React, { useState } from "react";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";
import { Textarea } from "../../text-area";
import { Button } from "../../button";
function Content() {
  const {
    onUpdate,
    isEditting,
    comment: { content, replyingTo },
  } = useComment();
  const [comment, setComment] = useState(content);
  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };
  const handleUpdate = () => {
    onUpdate(comment);
  };
  return (
    <div>
      {isEditting ? (
        <>
          <Textarea value={comment} onChange={handleCommentChange} />
          <Button
            onClick={handleUpdate}
            className={styles.updateButton}
            variant="primary"
          >
            Update
          </Button>
        </>
      ) : (
        <p className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
          )}

          {content}
        </p>
      )}
    </div>
  );
}

export { Content };
