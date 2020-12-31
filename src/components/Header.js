import React, { useCallback, useState } from "react";
import { connect } from "react-redux";

import { setSearchValue as setSearchValueAction } from "../store/actionCreators";
import { createTask as createTaskAction } from "../utils/api";
import { selectSearchValue, selectCurrentCard } from "../store/selectors";

import HeaderCard from "./CHeaderCard";

import "./Header.scss";

const Header = ({
  createTask,
  setSearchValue,
  searchValue,
  currentCard = {},
}) => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleClick = useCallback(() => {
    !!searchValue
      ? createTask(searchValue)
      : setValidationMessage("Task name cannot be empty");
  }, [createTask, searchValue]);

  const handleInputChange = useCallback(
    ({ target: { value } = {} }) => {
      setSearchValue(value);
      setValidationMessage("");
    },
    [setSearchValue]
  );

  return (
    <div
      className={`header-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}
      onClick={() => toggleSidebar(!isSidebarOpen)}
    >
      <div className={`header ${isSidebarOpen ? "header-open" : ""}`}>
        <div className="header-create-task">
          <input
            id="task-name"
            placeholder="Task name"
            onClick={(e) => e.stopPropagation()}
            onChange={handleInputChange}
          />

          {!!validationMessage ? (
            <label className="wrong-validation">{validationMessage}</label>
          ) : (
            ""
          )}
          <div
            id="create-task"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Create
          </div>
        </div>
        <hr />
        {currentCard.id ? <HeaderCard card={currentCard} /> : ""}
      </div>
      <button id="toggle-sidebar" onClick={() => toggleSidebar(!isSidebarOpen)}>
        test
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchValue: selectSearchValue(state),
  currentCard: selectCurrentCard(state),
});
const mapDispatchToProps = (dispatch) => ({
  createTask: (name) => createTaskAction(name, dispatch),
  setSearchValue: (value) => dispatch(setSearchValueAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
