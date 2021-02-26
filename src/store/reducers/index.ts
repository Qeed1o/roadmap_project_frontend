import { Action } from 'redux';
import { STORE_TASKS } from '../types';

const initialState = {};

export const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case STORE_TASKS: {
      return {
        ...state,
        tasks: (action as any).payload,
      };
    }
    default: {
      return state;
    }
  }
};
