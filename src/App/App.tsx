import React from 'react';
import { CHeader } from '../Components/HeaderComponent';
import { VBoard } from '../Views/BorderView';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CHeader />
      </header>
      <section className="content">
        <VBoard />
      </section>
    </div>
  );
};

export default App;
