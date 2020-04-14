import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Piano from './components/piano';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1> Learn Scales </h1>
    </header>
    <div className="container">
      <Piano />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
