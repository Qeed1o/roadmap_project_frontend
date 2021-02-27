import React, { useState } from 'react';
import { CAddTaskModal } from '../AddTaskModal';
import './style.scss';

export const CAddCard = () => {
  const [isModalHidden, setIsModalHidden] = useState<boolean>(false);
  return (
    <>
      <CAddTaskModal isHidden={isModalHidden} setIsHidden={setIsModalHidden} />
      <div className="card card-add" onClick={() => setIsModalHidden(true)}>
        <div className="plus-button-wrapper">
          <div className="plus-button">+</div>
        </div>
      </div>
    </>
  );
};
