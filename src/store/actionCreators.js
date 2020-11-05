import { GET_TASKS, SET_SEARCH_VALUE } from "./actionTypes";

export const storeTasks = (payload) => ({
  type: GET_TASKS,
  payload,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});
