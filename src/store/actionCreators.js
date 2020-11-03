import { GET_TASKS } from "./actionTypes";

export const storeTasks = (content) => ({
  type: GET_TASKS,
  payload: {
    content,
  },
});
