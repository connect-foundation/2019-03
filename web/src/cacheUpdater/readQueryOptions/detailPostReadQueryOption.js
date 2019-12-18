import { READ_POST } from '../../queries';

const detailPostReadQueryOption = (post, myInfo) => {
  return {
    query: READ_POST,
    variables: {
      postURL: post.postURL,
      UserId: myInfo.id,
    },
  };
};

export default detailPostReadQueryOption;
