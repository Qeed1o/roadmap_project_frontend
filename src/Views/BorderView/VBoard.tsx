import React, { useCallback, useEffect, useState } from 'react';

import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchTasks } from '../../store/actionCreators';
import { selectTasks } from '../../store/selectors';

export const VBoard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return <div className="board">{tasks.length}</div>;
};
