import React from 'react';
import './style.scss';

interface InputProps {
  type?: string;
  placeholder?: string;
  [key: string]: any;
}

interface WrapperProps {
  [key: string]: any;
}

interface Props {
  inputProps?: InputProps;
  wrapperProps?: WrapperProps;
  disabled: boolean;
}

export const CInput = ({
  inputProps = {},
  wrapperProps = {},
  disabled = false,
}: Props) => {
  return (
    <div {...wrapperProps} className="input-wrapper">
      {disabled ? (
        <div className="input">{inputProps?.value}</div>
      ) : (
        <input {...inputProps}></input>
      )}
    </div>
  );
};
