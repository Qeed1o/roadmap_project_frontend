import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import logo_close from '../../assets/close.svg';
import logo_goto from '../../assets/up-arrow.svg';
import { deleteTaskById, toggleTaskActiveById } from '../../store/actions';
import { leadingZerosToTime, threeDotsWithLimit } from '../../utils';

import './style.scss';

interface Props {
  isActive: boolean;
  description: string;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
  showModal: (arg: object) => void;
  toggleActive: (id: string) => void;
  remove: (id: string) => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ [key: string]: any }, void, Action>,
) => ({
  toggleActive: (id: string) => toggleTaskActiveById(id, dispatch),
  remove: (id: string) => deleteTaskById(id, dispatch),
});

export const CCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    id,
    description,
    isActive = false,
    isClosed,
    name,
    timeEnd,
    timeStart,
    showModal,
    toggleActive,
    remove,
  }: Props) => {
    const [styles, setStyles] = useState<string>('card');
    const startTime = new Date(timeStart);
    const card = useMemo(
      () => ({ name, id, isActive, isClosed, timeEnd, timeStart, description }),
      [name, id, isActive, isClosed, timeEnd, timeStart, description],
    );

    useEffect(() => {
      if (isActive) {
        if (!styles.includes('active')) setStyles(`${styles} active`);
      } else {
        setStyles('card');
      }
    }, [isActive, styles]);

    return (
      <>
        <div className={styles} onClick={() => toggleActive(id)}>
          <div className="actions">
            <div
              className="action"
              onClick={(e) => {
                e.stopPropagation();
                remove(id);
              }}
            >
              <img alt="" src={logo_close}></img>
            </div>
          </div>
          <h1>{name}</h1>
          <div className="card-info">
            <p>{threeDotsWithLimit(description, 80)}</p>
          </div>
          <div className="actions open-card">
            <div
              className="action"
              onClick={(e) => {
                e.stopPropagation();
                showModal(card);
              }}
            >
              <img alt="" src={logo_goto} />
            </div>
            <p>
              {startTime.toLocaleDateString()}-
              {leadingZerosToTime('' + startTime.getHours())}:
              {leadingZerosToTime('' + startTime.getMinutes())}:
              {leadingZerosToTime('' + startTime.getSeconds())}
            </p>
          </div>
        </div>
      </>
    );
  },
);
