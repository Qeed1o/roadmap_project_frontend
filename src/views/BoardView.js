import React from 'react';

import CBoard from '../components/CBoard';
import './BoardView.css';

const mockData = [
    {
      id: 1,
      name : "Eat",
      closed: true,
      timeStart: '2020-10-13T21:34:47.458Z',
      timeEnd: '2020-10-13T21:35:47.458Z'
    }, {
      id: 2,
      name : "Sleep",
      closed: false,
      timeStart: '2020-10-13T21:34:47.458Z'
    }, {
      id: 3,
      name : "Code",
      closed: false,
      timeStart: '2020-10-13T21:34:47.458Z'
    }
  ]

function BoardView(){
    return <CBoard tasks={mockData} />;
}

export default BoardView;