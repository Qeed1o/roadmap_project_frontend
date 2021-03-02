import React from 'react';
import './style.scss';

interface Props {
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CButton = ({
  className,
  label,
  onClick,
  isDisabled = false,
}: Props) => {
  const classNames = `button${isDisabled ? ' disabled' : ''} ${className}`;
  return (
    <div
      className={classNames}
      onClick={() => !isDisabled && onClick && onClick()}
    >
      {label}
    </div>
  );
};
