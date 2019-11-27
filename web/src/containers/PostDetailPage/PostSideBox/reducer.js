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
        data: state.data ? state.data.concat(action.data) : action.data,
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
          content: action.content,
          writer: action.writer,
        });
      });
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default reducer;
