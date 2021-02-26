interface State {
  [key: string]: any;
}

export const rootSelector = (state: State) => state;
export const selectTasks = (state: State) => state.tasks;
