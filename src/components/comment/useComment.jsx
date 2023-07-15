import React, { useState, useContext, createContext, useMemo } from "react";

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);
  const onReply = () => {
    setIsReplying(!isReplying);
  };
  const onDelete = () => {
    // Create a modal component and trigger it here
    setComment(null);
  };
  const onEdit = () => {
    setEditting(!isEditting);
  };
  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    onEdit();
  };
  const onPositiveReaction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const onNegativeReaction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };
  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: Math.floor(Math.random() * 100),
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    onReply();
  };
  const contextData = useMemo(
    () => ({
      onNegativeReaction,
      onPositiveReaction,
      onNewReply,
      onUpdate,
      isEditting,
      comment,
      currentUser: data.currentUser,
      isReplying,
      onReply,
      onDelete,
      onEdit,
    }),
    [isReplying, isEditting, comment]
  );

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("There is no comment context here !");
  }
  return context;
}

export { useComment, CommentContextProvider };
