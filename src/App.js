import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input className='App-input' type="text" placeholder="Type something..." />
        <button className="App-link">
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
