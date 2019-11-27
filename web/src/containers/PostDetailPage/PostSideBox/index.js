import React, { useContext, useEffect } from 'react';
import SideBoxWrapper from './SideBoxWrapper';

import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from '../../../components/CommentInput';
import UtilityBlock from './UtilityBlock';
import PostContext from '../context';
import { useFetch } from '../../../hooks';
import reducer from './reducer';
import { CommentProvider } from './context';

function SideBox() {
  const postId = useContext(PostContext).data.post.id;
  const commentListQuery = `{
    commentList(postId:${postId}, limit:10, offset:0){
      content,
      writer{
        username,
        profileImage
      }
    }
  }`;
  const { state, dispatch, fetchData } = useFetch(reducer);
  useEffect(() => {
    fetchData(commentListQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { post } = useContext(PostContext).data;
  const myInfo = {
    username: 'sam',
    profileImage: 'https://i.pravatar.cc/150?img=7',
  };
  return (
    <CommentProvider value={{ state, dispatch }}>
      <SideBoxWrapper>
        <PostTop writer={post.writer} myInfo={myInfo} post={post} />
        <PostContent />
        <UtilityBlock />
        <CommentInput state={state} dispatch={dispatch} post={post} />
      </SideBoxWrapper>
    </CommentProvider>
  );
}

export default SideBox;
