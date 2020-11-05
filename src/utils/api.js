import { storeTasks } from "../store/actionCreators";
import apiCalls from "./apiCalls";

export const getTasks = async (dispatch) => {
  const { data: { list } = {} } = await apiCalls.getTasksList();
  dispatch(storeTasks(list));
};

export const closeTask = async (id, dispatch) => {
  await apiCalls.closeTask(id);
  await getTasks(dispatch);
};

export const createTask = async (name, dispatch) => {
  await apiCalls.createTask(name);
  await getTasks(dispatch);
};
