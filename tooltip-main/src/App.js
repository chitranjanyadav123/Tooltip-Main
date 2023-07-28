import ReactTooltip from './ReactTooltip';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Tooltip Demo</h1>
    <ReactTooltip content="Thanks for hovering! I'm a tooltip" direction="right">
      <button className="button">Hover Over me</button>
    </ReactTooltip>
  </div>
  );
}
export default App;
