import React from 'react';

const CommentContext = React.createContext({});

export const CommentProvider = CommentContext.Provider;
export const CommentConsumer = CommentContext.Consumer;
export default CommentContext;
