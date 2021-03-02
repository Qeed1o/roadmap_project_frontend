import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateTask } from '../../store/actions';
import { withModal } from '../../utils/hooks';
import CModalCard from '../ModalCardComponent/CModalCard';
import './style.scss';

interface Props {
  isActive: boolean;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
  desc: string;
  updateTask: (task: Task) => void;
}
interface Task {
  isClosed?: boolean;
  isActive?: boolean;
  name?: string;
  desc?: string;
  id: string;
}

const CTask = ({
  isActive,
  desc,
  id,
  isClosed,
  name,
  timeEnd,
  timeStart,
  updateTask,
}: Props) => {
  return (
    <div className="task-modal">
      <CModalCard
        actionButtonLabel="Save"
        onActionButtonClick={(args) => {
          updateTask(args);
        }}
        initialState={{
          isActive,
          desc,
          id,
          isClosed,
          name,
          timeEnd,
          timeStart,
        }}
      ></CModalCard>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => ({
  updateTask: (task: Task) => updateTask(task, dispatch),
});

export const CTaskModal = withModal(
  connect(mapStateToProps, mapDispatchToProps)(CTask),
);
