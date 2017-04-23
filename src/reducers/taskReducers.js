export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK': {
      return [
        ...state,
        Object.assign({}, action.task)
      ];
    }
    case 'COPY_TASK': {
      let copyTask = Object.assign({}, action.task);
      copyTask.title = 'Copy ' + copyTask.title;
      return [
        ...state,
        copyTask
      ];
    }
    case 'DELETE_TASK': {
      const newState = Object.assign([], state);
      const indexOfTask = state.findIndex(task => {
        return task.title === action.task.title;
      });
      newState.splice(indexOfTask, 1);
      return newState;
    }
    case 'UPDATE_TASK': {
      const newState = [
        ...state
      ];
      Object.assign(newState[action.index], action.newTask);

      return newState;
    }
    default: {
      return state;
    }
  }
};
