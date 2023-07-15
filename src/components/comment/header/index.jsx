import React from "react";

import { Button } from "../../button";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";

function Header() {
  const {
    onReply,
    onDelete,
    onEdit,
    currentUser,
    comment: {
      createdAt,
      user: { image, username },
    },
  } = useComment();
  const ownedByCurrentUser = currentUser.username === username;
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.imageWrapper}>
        <img src={image.png} alt={username} />
      </div>
      <h3 className={styles.username}>{username}</h3>
      {ownedByCurrentUser && <span className={styles.person}>you</span>}
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.actionButtons}>
        {ownedByCurrentUser ? (
          <>
            <Button variant="warning" onClick={onDelete}>
              <img src="./images/icon-delete.svg" aria-hidden="true" />
              Delete
            </Button>
            <Button onClick={onEdit}>
              <img src="./images/icon-edit.svg" aria-hidden="true" />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src="./images/icon-reply.svg" aria-hidden="true" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
}

export { Header };
