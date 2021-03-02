import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createTask } from '../../store/actions';
import { withModal } from '../../utils/hooks';
import CModalCard from '../ModalCardComponent/CModalCard';
import './style.scss';

interface Props {
  createTaskAction: (task: ICreateTask) => void;
}
interface ICreateTask {
  name: string;
  desc: string;
}

const mapStateToProps = (state: { [key: string]: any }) => ({});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => ({
  createTaskAction: (task: ICreateTask) => createTask(task, dispatch),
});

const CAddTask = ({ createTaskAction }: Props) => {
  const createTask = useCallback(
    ({ name, desc }: ICreateTask) => {
      if (name) {
        createTaskAction({ name, desc });
      }
    },
    [createTaskAction],
  );

  return (
    <div className="add-task-modal">
      <CModalCard actionButtonLabel="Create" onActionButtonClick={createTask} />
    </div>
  );
};

export const CAddTaskModal = withModal(
  connect(mapStateToProps, mapDispatchToProps)(CAddTask),
);
