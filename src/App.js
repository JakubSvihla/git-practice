import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edits <code>src/App.js</code> and save to reload to see the changes immediately.
        </p>
        <p>
          Added a paragraph.
        </p>
        <p>
          Added a second paragraph.
        </p>
        <p>
          Added third paragraph from main.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
