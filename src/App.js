import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandomGreeting from './components/RandomGreeting';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RandomGreeting />} />
      </Routes>
    </>
  );
}

export default App;
