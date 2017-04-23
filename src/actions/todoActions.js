export const createTask = (task) => {
  return {
    type: 'ADD_TASK',
    task: task
  }
}

export const deleteTask = (task) => {
  return {
    type: 'DELETE_TASK',
    task: task
  }
}
