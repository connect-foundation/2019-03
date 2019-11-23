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
    writer,
    imgSrc,
    mainText,
    commentCount,
    commentList,
    likerList,
    updatedAt,
  } = post;

  return (
    <PostWrapper>
      <PostTop myInfo={myInfo} writer={writer} post={post} />
      <LikeProvider>
        <PostImage imgSrc={imgSrc} />
        <IconGroup>
          <IconWrapper>
            <LikeIcon ratio={5} />
          </IconWrapper>
          <IconWrapper>
            <CommentIcon post={post} />
          </IconWrapper>
          <IconWrapper>
            <ShareIcon />
          </IconWrapper>
        </IconGroup>
        <LikeInfo myInfo={myInfo} likerList={likerList} style={likeInfoStyle} />
      </LikeProvider>
      <Comment commenter={writer.username} isMainText>
        {mainText}
      </Comment>
      <AllCommentShowText post={post} commentCount={commentCount} />
      {commentList.map(c => (
        <Comment commenter={c.username}>{c.content}</Comment>
      ))}
      <UpdatedTime>1시간 전</UpdatedTime>
      <CommentInputWrapper>
        <CommentInput style={commentInputStyle} />
      </CommentInputWrapper>
    </PostWrapper>
  );
};

Post.defaultProps = {
  myInfo: {
    username: 'test1',
  },
  post: {
    imgSrc:
      'http://image.chosun.com/sitedata/image/201705/11/2017051101043_0.jpg',
    postHash: 'aaaaa',
    writer: {
      username: 'test2',
      isFollow: true,
    },
    mainText: `이것은 본문입니다.`,
    commentCount: 16,
    commentList: [
      {
        username: 'logqwerty',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        tempore libero similique, cupiditate explicabo, natus perferendis
        maxime aliquam corrupti eveniet rerum nobis doloremque? Soluta dolorum
        fugit inventore impedit, optio veritatis?`,
      },
      {
        username: 'logasdf',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        tempore libero similique, cupiditate explicabo, natus perferendis
        maxime aliquam corrupti eveniet rerum nobis doloremque? Soluta dolorum
        fugit inventore impedit, optio veritatis?`,
      },
    ],
    likerList: [
      {
        username: 'test1',
        name: 'aaaa',
      },
      {
        username: 'test2',
        name: 'bbbb',
      },
      {
        username: 'test3',
        name: 'cccc',
      },
      {
        username: 'test4',
        name: 'dddd',
      },
    ],
    updatedAt: Date.now(),
  },
};

export default Post;
