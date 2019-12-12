import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import {
  HashTagInfoWrapper,
  PostCardListWrapper,
  HashTagDetailInfoWrapper,
  HashTagPageWrapper,
} from './styles';
import ProfileIcon from '../../components/ProfileIcon';
import PostCardList from '../../components/PostCardList';
import AnnouncementMessage from '../../components/AnnouncementMessage';
import Loading from '../../components/Loading';

const HashTagPage = ({ match }) => {
  const { hashTag } = match.params;
  const loadingSize = 120;

  const hashtagPageQuery = gql`
    query HashTagPage($hashTagName: String!) {
      hashTagPage(hashTagName: $hashTagName) {
        isExistingHashTag
        postCard {
          postURL
          imageURL
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(hashtagPageQuery, {
    variables: { hashTagName: hashTag },
  });

  if (loading) return <Loading size={loadingSize} />;
  if (error)
    return <AnnouncementMessage>에러가 발생했습니다.</AnnouncementMessage>;
  if (!data.hashTagPage.isExistingHashTag)
    return (
      <AnnouncementMessage>존재하지않는 해쉬태그입니다.</AnnouncementMessage>
    );
  const isPostCardExisting = !!data.hashTagPage.postCard[0];
  if (!isPostCardExisting)
    return (
      <AnnouncementMessage>
        #{hashTag}관련 게시물이 존재하지 않습니다.
      </AnnouncementMessage>
    );
  return (
    <HashTagPageWrapper>
      <HashTagInfoWrapper>
        <ProfileIcon
          imageURL={data.hashTagPage.postCard[0].imageURL}
          ratio={47.5}
        />
        <HashTagDetailInfoWrapper>
          <h1>#{hashTag}</h1>
          <div>
            게시물<div>&nbsp;{data.hashTagPage.postCard.length}</div>
          </div>
        </HashTagDetailInfoWrapper>
      </HashTagInfoWrapper>
      <PostCardListWrapper>
        <PostCardList data={data.hashTagPage} />
      </PostCardListWrapper>
    </HashTagPageWrapper>
  );
};

export default HashTagPage;
