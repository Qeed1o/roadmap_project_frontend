import React, { useState } from 'react';
import './style.scss';

interface Props {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
}

// @ts-ignore
export const withModal = (Child: any) => ({ isHidden, setIsHidden }: Props) => {
  return isHidden ? (
    <div className="modal" onClick={() => setIsHidden(!isHidden)}>
      <div className="modal-content">
        <Child />
      </div>
    </div>
  ) : (
    <></>
  );
};
