import React, { useEffect, useState } from 'react';
import { CTaskModal } from '../TaskModalComponent';
import './style.scss';

interface Props {
  isActive: boolean;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
}

export const CCard = ({
  id,
  isActive = false,
  isClosed,
  name,
  timeEnd,
  timeStart,
}: Props) => {
  const [styles, setStyles] = useState<string>('card');
  const [isModalShowed, setIsModalShowed] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) setStyles(`${styles} active`);
  }, [isActive, styles]);

  return (
    <>
      <CTaskModal
        isShowed={isModalShowed}
        setIsShowed={setIsModalShowed}
        childProps={{ name, id, isActive, isClosed, timeEnd, timeStart }}
      />
      <div className={styles} onClick={() => setIsModalShowed(true)}>
        <h1>{name}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem sunt fugit tempore voluptatem blanditiis saepe dicta.
        </p>
      </div>
    </>
  );
};
