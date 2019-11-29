/**
 * state 관리
 */

import produce from 'immer';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: state.data || null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: {
          ...state.data,
          commentList: state.data
            ? state.data.commentList.concat(action.data.commentList)
            : action.data.commentList,
        },
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: state.data || null,
        error: action.error,
      };
    case 'NEWCOMMENT':
      return produce(state, draft => {
        draft.data.commentList.unshift({
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
