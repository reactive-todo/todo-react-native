const initialState = {
  tasks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, loading: true };
    case 'GET_TASKS_SUCCESS':
      return { ...state, loading: false, tasks: action.payload.data };
    case 'GET_TASKS_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
}

export function getTasks() {
  return {
    type: 'GET_TASKS',
    payload: {
      request: {
        url: '/tasks',
      },
    },
  };
}

export function checkTask(task) {
  return {
    type: 'CHECK_TASK',
    payload: {
      request: {
        method: 'PUT',
        url: `/tasks/${task.id}/check`,
      },
    },
  };
}

export function uncheckTask(task) {
  return {
    type: 'UNCHECK_TASK',
    payload: {
      request: {
        method: 'PUT',
        url: `/tasks/${task.id}/uncheck`,
      },
    },
  };
}
