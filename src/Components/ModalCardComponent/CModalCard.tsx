import React, { FunctionComponent, useEffect, useState } from 'react';
import { CButton } from '../ButtonComponent';
import { CInput } from '../InputComponent';

import './style.scss';

interface State {
  isActive: boolean;
  id: string;
  isClosed: boolean;
  name: string;
  timeEnd: string;
  timeStart: string;
  desc: string;
}

interface Props {
  actionButtonLabel: string;
  onActionButtonClick: (arg: any) => void;
  initialState?: State;
}

const CModalCard: FunctionComponent<Props> = ({
  actionButtonLabel,
  onActionButtonClick,
  initialState,
  children,
}) => {
  const [state, setState] = useState<State>({
    id: '',
    isActive: false,
    isClosed: false,
    name: '',
    timeEnd: '',
    timeStart: '',
    desc: '',
  });
  useEffect(() => {
    initialState && setState(initialState);
  }, [initialState]);

  return (
    <div className="card-modal">
      <div className="new-task-input name">
        <CInput
          disabled={!!initialState?.name}
          inputProps={{
            type: 'text',
            name: 'name',
            id: 'new-task-name',
            placeholder: 'Name',
            autoComplete: 'off',
            value: state?.name || '',

            onChange: (e: React.SyntheticEvent) =>
              // @ts-ignore TODO: fix it.
              setState({ ...state, name: e.target.value }),
          }}
        />
      </div>
      <div className="new-task-input desc">
        <textarea
          placeholder="Description"
          value={state?.desc || ''}
          onChange={(e: React.SyntheticEvent) =>
            // @ts-ignore TODO: fix it.
            setState({ ...state, desc: e.target.value })
          }
          name="new-task-desc"
        ></textarea>
      </div>
      {children}
      <CButton
        label={actionButtonLabel}
        onClick={() => {
          onActionButtonClick(state);
          !initialState && setState({ ...state, desc: '', name: '' });
        }}
        isDisabled={!state?.name}
      />
    </div>
  );
};

export default CModalCard;
