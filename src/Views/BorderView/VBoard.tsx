import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CAddCard } from '../../Components/AddCardComponent';
import { CCard } from '../../Components/CardComponent';
import { CTaskModal } from '../../Components/TaskModalComponent';

import { fetchTasks } from '../../store/actions';
import { selectTasks } from '../../store/selectors';
import './style.scss';

interface Props {
  tasks: TaskCard[] | undefined;
  fetchTasks: () => void;
}

interface State {
  tasks: TaskCard[];
}

interface TaskCard {
  id: string;
  description: string;
  isActive: boolean;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
}

const mapStateToProps = (state: State) => ({
  tasks: selectTasks(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => ({
  fetchTasks: () => fetchTasks(dispatch),
});

export const VBoard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ tasks, fetchTasks }: Props) => {
  const [taskCards, setTaskCards] = useState<TaskCard[] | undefined>();
  const [isModalShowed, setIsModalShowed] = useState<boolean>(false);
  const [modalData, setModalData] = useState<object>({});

  const showModal = useCallback((data) => {
    setIsModalShowed(true);
    setModalData(data);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  useEffect(() => {
    setTaskCards(tasks);
  }, [tasks]);

  const cards = useMemo(
    () =>
      taskCards?.map((task, index) => (
        <CCard key={`card-${index}`} {...task} showModal={showModal} />
      )),
    [taskCards, showModal],
  );
  return (
    <div className="board">
      <CTaskModal
        isShowed={isModalShowed}
        setIsShowed={setIsModalShowed}
        childProps={modalData}
      />
      {cards}
      <CAddCard />
    </div>
  );
});
