import followUpdatedQuery from './follow';
import followerUpdateQuery from './follower';
import likerUpdateQuery from './liker';

const selectUpdateQuery = {
  팔로우: followUpdatedQuery,
  팔로워: followerUpdateQuery,
  좋아요: likerUpdateQuery,
};

export default selectUpdateQuery;
