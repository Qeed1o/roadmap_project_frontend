import React, { useEffect, useMemo, useState } from 'react';
import { leadingZerosToTime } from '../../utils';
import { withModal } from '../../utils/hooks';
import { CButton } from '../ButtonComponent';
import './style.scss';

interface Props {
  isActive: boolean;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
  description: string;
}

const CTask = ({
  isActive,
  description,
  id,
  isClosed,
  name,
  timeEnd,
  timeStart,
}: Props) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isClosedToSave, setIsClosed] = useState<boolean>(isClosed);
  const [isActiveToSave, setIsActive] = useState<boolean>(isActive);
  const startTime = new Date(timeStart);
  const endTime = timeEnd ? new Date(timeEnd) : false;

  useEffect(() => {
    setIsActive(isActive);
    setIsClosed(isClosed);
  }, [isClosed, isActive]);

  const isActiveTextColor = useMemo(() => (isActiveToSave ? 'green' : 'red'), [
    isActiveToSave,
  ]);
  const isClosedTextColor = useMemo(() => (isClosedToSave ? 'green' : 'red'), [
    isClosedToSave,
  ]);
  return (
    <div className="task-modal">
      <div className="title">
        <h1>
          <u>{name}</u>
        </h1>
      </div>
      <div className="info-wrapper">
        <div className="info">
          <pre>ID</pre>
          <u>{id}</u>
        </div>
        <textarea contentEditable={false} value={description}></textarea>
        <div className="info">
          <pre>Active</pre>
          <u
            className={isActiveTextColor}
            onClick={() => {
              setIsActive(!isActiveToSave);
              !isChanged && setIsChanged(true);
            }}
          >{`${isActiveToSave}`}</u>
        </div>
        <div className="info">
          <pre>Closed</pre>
          <u
            className={isClosedTextColor}
            onClick={() => {
              setIsClosed(!isClosedToSave);
              !isChanged && setIsChanged(true);
            }}
          >{`${isClosedToSave}`}</u>
        </div>
        <div className="info">
          <pre>Started</pre>
          <u>
            {startTime.toLocaleDateString()}-
            {leadingZerosToTime('' + startTime.getHours())}:
            {leadingZerosToTime('' + startTime.getMinutes())}:
            {leadingZerosToTime('' + startTime.getSeconds())}
          </u>
        </div>
        {endTime ? (
          <div className="info">
            <pre>timeEnd</pre>
            <u>
              {endTime.toLocaleDateString()}-
              {leadingZerosToTime('' + endTime.getHours())}:
              {leadingZerosToTime('' + endTime.getMinutes())}:
              {leadingZerosToTime('' + endTime.getSeconds())}
            </u>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="actions">
        <CButton label="Save" className="save" />
      </div>
    </div>
  );
};

export const CTaskModal = withModal(CTask);
