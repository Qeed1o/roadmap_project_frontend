import React, { useCallback } from "react";
import { connect } from "react-redux";

import delete_icon from "../assets/delete.png";
import active_icon from "../assets/active.png";
import close_icon from "../assets/close.png";
import "./CHeaderCard.scss";
import {
  makeActive as makeActiveAction,
  closeTask as closeTaskAction,
  deleteTask as deleteTaskAction,
} from "../utils/api";

const infoField = (key, value) => (
  <div className="header-card-text">
    <span className="key">{key}:</span>
    <span className="value">{value}</span>
  </div>
);

const actionField = (icon, callback) => (
  <div className="action" onClick={callback}>
    <img src={icon} alt="action" />
  </div>
);

const conditionally = (element, condition) => {
  if (condition) return element;
  else return null;
};

const HeaderCard = ({
  card: { id, name, isClosed, isActive },
  makeActive,
  makeClosed,
  deleteTask,
}) => {
  const handleClose = useCallback(
    (e) => {
      e.stopPropagation();
      makeClosed(id);
    },
    [id, makeClosed]
  );

  const handleSetActive = useCallback(
    (e) => {
      e.stopPropagation();
      makeActive(id);
    },
    [id, makeActive]
  );

  const handleDelete = useCallback(
    (e) => {
      e.stopPropagation();
      deleteTask(id);
    },
    [id, deleteTask]
  );

  return (
    <div className="header-card-wrapper">
      {infoField("ID", id)}
      {infoField("Name", name)}
      <div className="header-card-actions">
        {conditionally(actionField(close_icon, handleClose), !isClosed)}
        {conditionally(actionField(active_icon, handleSetActive), !isActive)}
        {actionField(delete_icon, handleDelete)}
      </div>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  makeActive: (id) => makeActiveAction(id, dispatch),
  makeClosed: (id) => closeTaskAction(id, dispatch),
  deleteTask: (id) => deleteTaskAction(id, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCard);
