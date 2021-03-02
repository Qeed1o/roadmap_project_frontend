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
  const [taskName, setTaskName] = useState<string>('');
  const [taskDesc, setTaskDesc] = useState<string>('');

  const createTask = useCallback(() => {
    if (taskName) {
      setTaskName('');
      setTaskDesc('');
      createTaskAction({ name: taskName, desc: taskDesc });
    }
  }, [taskName, createTaskAction, taskDesc]);

  return (
    <div className="add-task-modal">
      <div className="new-task-input name">
        <CInput
          inputProps={{
            type: 'text',
            name: 'name',
            id: 'new-task-name',
            placeholder: 'Name',
            autoComplete: 'off',
            value: taskName,
            // @ts-ignore TODO: fix it.
            onInput: (e: React.SyntheticEvent) => setTaskName(e.target.value),
          }}
        />
      </div>
      <div className="new-task-input desc">
        <textarea
          placeholder="Description"
          value={taskDesc}
          // @ts-ignore
          onChange={(e: React.SyntheticEvent) => setTaskDesc(e.target.value)}
          name="new-task-desc"
        ></textarea>
      </div>
      <CButton label="Create" onClick={createTask} isDisabled={!taskName} />
    </div>
  );
};

export const CAddTaskModal = withModal(
  connect(mapStateToProps, mapDispatchToProps)(CAddTask),
);
