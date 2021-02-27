import { ThunkDispatch } from 'redux-thunk';
import { STORE_TASKS } from '../types';

import api from '../../utils/api';

interface Action {
  type: string;
  payload: any;
}
type Dispatch = ThunkDispatch<{ [key: string]: any }, void, Action>;

export const fetchTasks = async (dispatch: Dispatch) => {
  const { list } = await api.fetchTasks();
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};

export const createTask = async (name: string, dispatch: Dispatch) => {
  const { list } = await api.createTask(name);
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};
