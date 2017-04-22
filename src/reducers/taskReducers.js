export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      state.push(action.task);
    default:
      return state;
  }
};
