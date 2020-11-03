import axios from "axios";

import { storeTasks } from "../store/actionCreators";
import apiCalls from "./apiCalls";

export const getTasks = async (dispatch) => {
  const { data: { list } = {} } = await apiCalls.getTasksList();
  dispatch(storeTasks(list));
};
