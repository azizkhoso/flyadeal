import React from 'react';
import CardsContainer from './components/CardsContainer';
import SelectedComponent from './components/SelectedComponent';
import TopComponent from './components/TopComponent';
import './index.css';
import '@fontsource/raleway';

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen m-0 bg-gray-50 b-0" style={{ fontFamily: '\'Raleway\'' }}>
      <TopComponent />
      <CardsContainer />
      <SelectedComponent />
    </div>
  );
}

export default App;
