import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
