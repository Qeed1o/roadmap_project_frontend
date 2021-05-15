import api from '../utils/api';
import { AppDispatch } from './store';
import { actions } from './reducers';
import { Task } from '../types';

export const fetchTasks = () => async (dispatch: AppDispatch) => {
  const { list } = await api.fetchTasks();
  dispatch(actions.setTasks(list));
};

export const createTask = (task: Task) => async (dispatch: AppDispatch) => {
  const { list } = await api.createTask(task);
  dispatch(actions.setTasks(list));
};

export const updateTask = (task: Task) => async (dispatch: AppDispatch) => {
  const { list } = await api.updateTask(task);
  dispatch(actions.setTasks(list));
};

export const deleteTaskById = (id: string) => async (dispatch: AppDispatch) => {
  const { list } = await api.deleteTaskById(id);
  dispatch(actions.setTasks(list));
};
