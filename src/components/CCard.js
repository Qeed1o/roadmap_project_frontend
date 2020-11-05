import React, { useCallback } from "react";
import { connect } from "react-redux";

import close_icon from "../assets/close.png";
import "./CCard.scss";
import { closeTask as closeTaskAction } from "../utils/api";

const isClosedElement = (timeEnd) => (
  <>
    <hr />
    <p className="time">Closed: {timeEnd}</p>
  </>
);

const tooltipElement = (hoverValue, showValue) => (
  <div className="tooltip">
    <h1 className="name">{hoverValue}</h1>
    <span className="id">{showValue}</span>
  </div>
);

const CCard = ({
  id,
  name,
  timeStart,
  timeEnd = null,
  classes = [],
  closeTask,
}) => {
  const handleClick = useCallback(() => {
    closeTask(id);
    // eslint-disable-next-line
  }, [closeTask]);

  return (
    <div className="taskcard-wrapper">
      <div className={`task-card id-${id} ${classes}`}>
        <div className="actions">
          <div className="action" onClick={handleClick}>
            <img src={close_icon} alt="close"></img>
          </div>
        </div>
        <div className="info-wrapper">
          <p className="time">Started: {timeStart}</p>
          <hr />
          {tooltipElement(name, id)}
          {timeEnd ? isClosedElement(timeEnd) : ""}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  closeTask: (id) => closeTaskAction(id, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CCard);
