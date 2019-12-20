import followUpdatedQuery from './follow';
import followerUpdateQuery from './follower';

const selectUpdateQuery = {
  팔로우: followUpdatedQuery,
  팔로워: followerUpdateQuery,
};

export default selectUpdateQuery;
