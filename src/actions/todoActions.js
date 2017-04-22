export const createTask = (task) => {
  return {
    type: 'ADD_TASK',
    task: task
  }
}
