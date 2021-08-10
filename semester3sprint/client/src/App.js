import React, { Fragment } from 'react';
import './App.css';

// components

import InputDecks from './components/InputDecks';
import ListDecks from './components/ListDecks';



function App() {
  return (
    <Fragment>
      <div className="container">
        <InputDecks />
        <ListDecks />
      </div>
    </Fragment>
  );
}

export default App;
