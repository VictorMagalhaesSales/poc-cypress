import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  const buttonSubmit = () => {
    alert("Button clicked with input: " + inputValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input 
          className='App-input'
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="App-link" onClick={buttonSubmit}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
