import produce from 'immer';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    case 'NEWCOMMENT':
      return produce(state, draft => {
        draft.data.followingPostList
          .find(post => post.id === action.target)
          .commentList.unshift({
            id: action.id,
            content: action.content,
            writer: action.writer,
          });
      });
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default reducer;
