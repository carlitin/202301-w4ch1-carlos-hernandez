import React from 'react';
import './App.css';
import Card from './components/ Gentleman/Gentelman';
import gentlemanData from './components/ Gentleman/gentelman.data';
import "./components/ Gentleman/Gentelman.css"

function App() {
  return (
    <div className="App">
      {gentlemanData.map((gentleman) => (
        <Card gentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;