import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const actions = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
