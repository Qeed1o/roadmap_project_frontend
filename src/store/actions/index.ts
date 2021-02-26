import { ThunkDispatch } from 'redux-thunk';
import { STORE_TASKS } from '../types';

import api from '../../utils/api';

interface Action {
  type: string;
  payload: any;
}

export const fetchTasks = async (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => {
  const { list } = await api.fetchTasks();
  dispatch({
    type: STORE_TASKS,
    payload: list,
  });
};
