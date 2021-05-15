import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const rootSelector = (state: RootState) => state.root;
export const selectTasks = createSelector(rootSelector, (state) => state.tasks);
