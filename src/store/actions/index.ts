import { ThunkDispatch } from 'redux-thunk';
import { STORE_TASKS } from '../types';

import api from '../../utils/api';

interface Action {
  type: string;
  payload: any;
}
interface ICreateTask {
  name: string;
  desc: string;
}
interface Task {
  isClosed?: boolean;
  isActive?: boolean;
  name?: string;
  desc?: string;
  id: string;
}
type Dispatch = ThunkDispatch<{ [key: string]: any }, void, Action>;

export const fetchTasks = async (dispatch: Dispatch) => {
  const { list } = await api.fetchTasks();
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};

export const createTask = async (task: ICreateTask, dispatch: Dispatch) => {
  const { list } = await api.createTask(task);
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};

export const updateTask = async (task: Task, dispatch: Dispatch) => {
  const { list } = await api.updateTask(task);
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};

export const deleteTaskById = async (id: string, dispatch: Dispatch) => {
  const { list } = await api.deleteTaskById(id);
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};
