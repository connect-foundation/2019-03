export default function(state, action) {
  switch (action.type) {
    case 'INITIATE':
      console.log(action);
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
}
