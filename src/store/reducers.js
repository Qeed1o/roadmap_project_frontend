import { GET_TASKS } from "./actionTypes";

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASKS: {
      return {
        ...state,
        tasks: payload.content,
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
