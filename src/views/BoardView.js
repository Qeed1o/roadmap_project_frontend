import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import CBoard from "../components/CBoard";
import "./BoardView.scss";
import { getTasks } from "../utils/api";
import { tasksSelector } from "../store/selectors";

const BoardView = ({ fetchTasks, tasks = [] }) => {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  return <CBoard tasks={tasks} />;
};

const mapStateToProps = (state) => ({
  tasks: tasksSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => getTasks(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardView);
