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
}

export const CInput = ({ inputProps = {}, wrapperProps = {} }: Props) => {
  return (
    <div {...wrapperProps} className="input">
      <input {...inputProps}></input>
    </div>
  );
};
