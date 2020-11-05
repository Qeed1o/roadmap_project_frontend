import React, { useCallback } from "react";
import { connect } from "react-redux";

import { setSearchValue as setSearchValueAction } from "../store/actionCreators";
import { createTask as createTaskAction } from "../utils/api";
import { selectSearchValue } from "../store/selectors";

import "./Header.scss";

const Header = ({ createTask, setSearchValue, searchValue }) => {
  const handleClick = useCallback(() => {
    createTask(searchValue);
  }, [createTask, searchValue]);

  return (
    <div className="header">
      <input
        id="task-name"
        placeholder="Task name"
        onChange={({ target: { value } = {} }) => setSearchValue(value)}
        value={searchValue}
      />
      <div className="button" id="create-task" onClick={handleClick}>
        Create
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchValue: selectSearchValue(state),
});
const mapDispatchToProps = (dispatch) => ({
  createTask: (name) => createTaskAction(name, dispatch),
  setSearchValue: (value) => dispatch(setSearchValueAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
