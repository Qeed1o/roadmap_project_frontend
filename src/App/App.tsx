import React from 'react';
import { VBoard } from '../Views/BorderView';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <section className="content">
        <VBoard />
      </section>
    </div>
  );
};

export default App;
