import { GET_TASKS, SET_SEARCH_VALUE, SET_CURRENT_TASK } from "./actionTypes";

export const storeTasks = (payload) => ({
  type: GET_TASKS,
  payload,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const setCurrentCard = (payload) => ({
  type: SET_CURRENT_TASK,
  payload,
});
