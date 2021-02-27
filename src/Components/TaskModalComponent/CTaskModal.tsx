import React from 'react';
import { withModal } from '../../utils/hooks';
import './style.scss';

interface Props {
  isActive: boolean;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
}

const CTask = ({ isActive, id, isClosed, name, timeEnd, timeStart }: Props) => {
  return (
    <div className="task-modal">
      <div className="info">id:{id}</div>
      <div className="info">name:{name}</div>
      <div className="info">isActive:{`${isActive}`}</div>
      <div className="info">isClosed:{`${isClosed}`}</div>
      <div className="info">timeStart:{timeStart}</div>
      <div className="info">timeEnd:{timeEnd}</div>
    </div>
  );
};

export const CTaskModal = withModal(CTask);
