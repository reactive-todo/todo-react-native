const initialState = {
  tasks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, tasks: action.payload.tasks };
    default:
      return state;
  }
}

export function getTasks() {
  return {
    type: 'GET_TASKS',
    payload: {
      tasks: Array(...Array(5)).map((_, i) => ({ id: i, name: `Задача ${i}`, checked: false })),
    },
  };
}

// export function listRepos(user) {
//   return {
//     type: 'GET_REPOS_LIST',
//     payload: {
//       request: {
//         url: `/users/${user}/repos`,
//       },
//     },
//   };
// }
