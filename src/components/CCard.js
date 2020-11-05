import React from "react";

import create_icon from "../assets/create.png";
import delete_icon from "../assets/delete.png";
import close_icon from "../assets/close.png";
import "./CCard.scss";

const isClosedElement = (timeEnd) => (
  <>
    <hr />
    <p class="time">Closed: {timeEnd}</p>
  </>
);

const tooltipElement = (hoverValue, showValue) => (
  <div class="tooltip">
    <h1 class="name">{hoverValue}</h1>
    <span class="id">{showValue}</span>
  </div>
);

const CCard = ({ id, name, timeStart, timeEnd = null, classes = [] }) => {
  return (
    <div class="taskcard-wrapper">
      <div class={`task-card id-${id} ${classes}`}>
        <div class="actions">
          <div class="action">
            <img src={delete_icon}></img>
          </div>
          <div class="action">
            <img src={close_icon}></img>
          </div>
          <div class="action">
            <img src={create_icon}></img>
          </div>
        </div>
        <div class="info-wrapper">
          <p class="time">Started: {timeStart}</p>
          <hr />
          {tooltipElement(name, id)}
          {timeEnd ? isClosedElement(timeEnd) : ""}
        </div>
      </div>
    </div>
  );
};

export default CCard;
