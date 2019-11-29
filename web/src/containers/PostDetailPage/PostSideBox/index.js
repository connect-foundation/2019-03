/**
 * state 관리
 */

import React, { useContext, useEffect, useState } from 'react';
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
  const [offset, setOffset] = useState(0);
  const { state, dispatch, fetchData } = useFetch(reducer);

  const commentListQuery = `{
    commentList(postId:${postId}, limit:10, offset:${offset}){
      id,
      content,
      writer{
        username,
        profileImage
      }
    }
  }`;

  const requestMoreComments = () => {
    if (state.loading) return;
    fetchData(commentListQuery);
    setOffset(offset + 10);
  };

  useEffect(() => {
    requestMoreComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { post } = useContext(PostContext).data;
  const myInfo = {
    id: 1,
    username: '_so_02',
    name: '정소영',
    profileImage: 'https://i.pravatar.cc/150?img=9',
  };
  return (
    <CommentProvider value={{ state, dispatch, requestMoreComments }}>
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
