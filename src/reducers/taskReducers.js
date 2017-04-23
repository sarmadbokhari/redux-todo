export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK': {
      return [
        ...state,
        Object.assign({}, action.task)
      ];
    }
    case 'DELETE_TASK': {
      const newState = Object.assign([], state);
      const indexOfTask = state.findIndex(task => {
        return task.title === action.task.title
      })
      newState.splice(indexOfTask, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
};
