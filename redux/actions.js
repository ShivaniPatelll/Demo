export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const completeTask = taskId => ({
  type: COMPLETE_TASK,
  payload: taskId,
});

export const editTask = task => ({
  type: EDIT_TASK,
  payload: task,
});
