import { storeTasks, setCurrentCard } from "../store/actionCreators";
import apiCalls from "./apiCalls";

export const getTasks = async (dispatch) => {
  const { data: { list } = {} } = await apiCalls.getTasksList();
  dispatch(storeTasks(list));
};

export const closeTask = async (id, dispatch) => {
  const { data: { list } = {} } = await apiCalls.closeTask(id);
  dispatch(storeTasks(list));
};

export const createTask = async (name, dispatch) => {
  const { data: { list } = {} } = await apiCalls.createTask(name);
  dispatch(storeTasks(list));
};

export const makeActive = async (id, dispatch) => {
  const { data: { list } = {} } = await apiCalls.setActive(id);
  dispatch(storeTasks(list));
};

export const deleteTask = async (id, dispatch) => {
  const { data: { list } = {} } = await apiCalls.deleteTask(id);
  dispatch(setCurrentCard({}));
  dispatch(storeTasks(list));
};
