import { GET_TASKS, SET_SEARCH_VALUE, SET_CURRENT_TASK } from "./actionTypes";

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASKS: {
      return {
        ...state,
        tasks: payload,
      };
    }

    case SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: payload,
      };
    }

    case SET_CURRENT_TASK: {
      return {
        ...state,
        currentTask: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
