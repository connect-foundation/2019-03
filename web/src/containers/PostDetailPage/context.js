import React from 'react';

const PostContext = React.createContext({});

export const PostProvider = PostContext.Provider;
export const PostConsumer = PostContext.Consumer;
export default PostContext;
