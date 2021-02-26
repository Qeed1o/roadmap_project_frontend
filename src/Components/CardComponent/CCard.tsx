import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (isActive) setStyles(`${styles} active`);
  }, [isActive, styles]);

  return (
    <div className={styles}>
      <h1>{name}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        sunt fugit tempore voluptatem blanditiis saepe dicta.
      </p>
    </div>
  );
};
