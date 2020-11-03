import React from "react";

import "./CCard.scss";

const isClosedElement = (timeEnd) => (
  <>
    <hr />
    <p class="time">Closed: {timeEnd}</p>
  </>
);

function CCard({ id, name, timeStart, timeEnd = null, classes = [] }) {
  return (
    <div class={`task-card id-${id} ${classes}`}>
      <p class="time">Started: {timeStart}</p>
      <hr />
      <h1 class="name">{name}</h1>
      {timeEnd ? isClosedElement(timeEnd) : ""}
    </div>
  );
}

export default CCard;
