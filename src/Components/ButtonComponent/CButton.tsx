import React from 'react';
import './style.scss';

interface Props {
  label: string;
  onClick?: () => void;
}

export const CButton = ({ label, onClick }: Props) => {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
};
