export const createTask = (task) => {
  return {
    type: 'ADD_TASK',
    task: task
  };
};

export const deleteTask = (task) => {
  return {
    type: 'DELETE_TASK',
    task: task
  };
};

export const copyTask = (task) => {
  return {
    type: 'COPY_TASK',
    task: task
  }
}

export const updateTask = (newTask, index) => {
  return {
    type: 'UPDATE_TASK',
    index: index,
    newTask: newTask
  }
}
