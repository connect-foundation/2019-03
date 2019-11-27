import React from 'react';

import {
  PostWrapper,
  PostImage,
  IconGroup,
  IconWrapper,
  ShareIcon,
  Comment,
  CommentIcon,
  CommentInputWrapper,
  AllCommentShowText,
  UpdatedTime,
} from './styles';
import PostTop from '../../../components/PostTop';
import LikeIcon from '../../../components/LikeIcon';
import LikeInfo from '../../../components/LikeInfo';
import CommentInput from '../../../components/CommentInput';
import { LikeProvider } from '../../../components/LikeIcon/Context/LikeContext';
import { LikerInfoProvider } from '../../../components/LikeInfo/Context/LikerInfoContext';
import { getDateDiffText } from '../../../utils';

const likeInfoStyle = {
  margin: '4px 15px',
};

const commentInputStyle = {
  flex: '1 0 auto',
  borderTop: 'none',
  padding: '0 14.5px',
};

const Post = ({ myInfo, post }) => {
  const {
    imageURL,
    postURL,
    content,
    writer,
    commentCount,
    commentList,
    likerInfo,
    updatedAt,
  } = post;

  const isLike = false; // likerInfo.isLike
  const dateDiffText = getDateDiffText(+updatedAt, new Date());

  return (
    <PostWrapper>
      <PostTop myInfo={myInfo} writer={writer} post={post} />
      <LikerInfoProvider likerInfo={likerInfo}>
        <LikeProvider isLike={isLike}>
          <PostImage imgSrc={imageURL} />
          <IconGroup>
            <IconWrapper>
              <LikeIcon ratio={5} />
            </IconWrapper>
            <IconWrapper>
              <CommentIcon postURL={postURL} />
            </IconWrapper>
            <IconWrapper>
              <ShareIcon />
            </IconWrapper>
          </IconGroup>
          <LikeInfo myInfo={myInfo} style={likeInfoStyle} />
        </LikeProvider>
      </LikerInfoProvider>
      <Comment commenter={writer.username} isMainText>
        {content}
      </Comment>
      <AllCommentShowText postURL={postURL} commentCount={commentCount} />
      {commentList.map(c => {
        const { content: comment, writer: commenter } = c;
        const { username } = commenter;
        return (
          <Comment key={username} commenter={username}>
            {comment}
          </Comment>
        );
      })}
      <UpdatedTime>{dateDiffText}</UpdatedTime>
      <CommentInputWrapper>
        <CommentInput style={commentInputStyle} post={post} />
      </CommentInputWrapper>
    </PostWrapper>
  );
};

export default Post;
