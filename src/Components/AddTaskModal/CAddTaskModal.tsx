import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createTask } from '../../store/actions';
import { withModal } from '../../utils/hooks';
import { CButton } from '../ButtonComponent';
import { CInput } from '../InputComponent';
import './style.scss';

interface Props {
  createTaskAction: (name: string) => void;
}

const mapStateToProps = (state: { [key: string]: any }) => ({});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => ({
  createTaskAction: (name: string) => createTask(name, dispatch),
});

const CAddTask = ({ createTaskAction }: Props) => {
  const [taskName, setTaskName] = useState<string>('');

  const createTask = useCallback(() => {
    if (taskName) createTaskAction(taskName);
  }, [taskName]);

  return (
    <div
      className="add-task-modal"
      onClick={(e: React.SyntheticEvent) => {
        e.stopPropagation();
      }}
    >
      <div className="name-input">
        <CInput
          inputProps={{
            type: 'text',
            name: 'name',
            id: 'new-task-name',
            placeholder: 'task name',
            autoComplete: 'off',
            value: taskName,
            // @ts-ignore TODO: fix it.
            onInput: (e: React.SyntheticEvent) => setTaskName(e.target.value),
          }}
        />
      </div>
      <CButton label="Create" onClick={createTask} />
    </div>
  );
};

export const CAddTaskModal = withModal(
  connect(mapStateToProps, mapDispatchToProps)(CAddTask),
);
