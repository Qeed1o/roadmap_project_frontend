import React, { useState } from 'react';
import { CAddTaskModal } from '../AddTaskModal';
import './style.scss';

export const CAddCard = () => {
  const [isModalShowed, setIsModalShowed] = useState<boolean>(false);
  return (
    <>
      <CAddTaskModal isShowed={isModalShowed} setIsShowed={setIsModalShowed} />
      <div className="card card-add" onClick={() => setIsModalShowed(true)}>
        <div className="plus-button-wrapper">
          <div className="plus-button">+</div>
        </div>
      </div>
    </>
  );
};
