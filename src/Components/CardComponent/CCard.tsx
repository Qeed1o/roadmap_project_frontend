import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import logo_delete from '../../assets/close.svg';
import logo_close from '../../assets/success.svg';
import logo_goto from '../../assets/up-arrow.svg';
import { deleteTaskById, updateTask } from '../../store/actions';
import { leadingZerosToTime, threeDotsWithLimit } from '../../utils';

import './style.scss';

interface Props {
  isActive: boolean;
  desc: string;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
  showModal: (arg: object) => void;
  updateTask: (task: Task) => void;
  remove: (id: string) => void;
}
interface Task {
  isClosed?: boolean;
  isActive?: boolean;
  name?: string;
  desc?: string;
  id: string;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => ({
  updateTask: (task: Task) => updateTask(task, dispatch),
  remove: (id: string) => deleteTaskById(id, dispatch),
});

export const CCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    id,
    desc,
    isActive = false,
    isClosed,
    name,
    timeEnd,
    timeStart,
    showModal,
    updateTask,
    remove,
  }: Props) => {
    const startTime = new Date(timeStart);
    const styles = useMemo(() => {
      const cardStyles = ['card'];
      isActive && cardStyles.push('active');
      isClosed && cardStyles.push('closed');
      return cardStyles.join(' ');
    }, [isActive, isClosed]);

    return (
      <>
        <div
          className={styles}
          onClick={() => !isClosed && updateTask({ isActive: !isActive, id })}
        >
          <div className="actions">
            <div
              className="action"
              onClick={(e) => {
                e.stopPropagation();
                remove(id);
              }}
            >
              <img alt="" src={logo_delete} />
            </div>
            {isClosed ? (
              ''
            ) : (
              <div
                className="action"
                onClick={(e) => {
                  e.stopPropagation();
                  updateTask({ isClosed: true, id });
                }}
              >
                <img src={logo_close} alt="close card" />
              </div>
            )}
          </div>
          <h1>{name}</h1>
          <div className="card-info">
            <p>{desc && threeDotsWithLimit(desc, 80)}</p>
          </div>
          <div className="actions open-card">
            <div
              className="action"
              onClick={(e) => {
                e.stopPropagation();
                showModal({
                  name,
                  id,
                  isActive,
                  isClosed,
                  timeEnd,
                  timeStart,
                  desc,
                });
              }}
            >
              <img alt="" src={logo_goto} />
            </div>
            {isClosed ? (
              ''
            ) : (
              <p>
                {leadingZerosToTime('' + startTime.getHours())}:
                {leadingZerosToTime('' + startTime.getMinutes())}:
                {leadingZerosToTime('' + startTime.getSeconds())}
              </p>
            )}
          </div>
        </div>
      </>
    );
  },
);
