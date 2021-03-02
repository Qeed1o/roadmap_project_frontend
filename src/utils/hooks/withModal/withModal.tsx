import React from 'react';
import './style.scss';

interface Props {
  isShowed: boolean;
  setIsShowed: (isShowed: boolean) => void;
  childProps?: { [key: string]: any };
}

// @ts-ignore
export const withModal = (Child: any) => ({
  isShowed,
  setIsShowed,
  childProps,
}: Props) => {
  return (
    <div
      className={`modal ${isShowed ? 'shown' : ''}`}
      onClick={() => setIsShowed(!isShowed)}
    >
      {isShowed ? (
        <div
          className="modal-content"
          onClick={(e: React.SyntheticEvent) => {
            e.stopPropagation();
          }}
        >
          <Child {...childProps} />
        </div>
      ) : null}
    </div>
  );
};
