export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        Object.assign({}, action.task)
      ]
    default:
      return state;
  }
};
