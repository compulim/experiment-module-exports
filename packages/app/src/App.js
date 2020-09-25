import React from 'react';
import logo from './logo.svg';
import './App.css';

// Use the new exports-map feature:
// https://github.com/nodejs/node/issues/21787
// https://github.com/jkrems/proposal-pkg-exports
import useHelloWorld from 'component/hooks/useHelloWorld';

// Use the old way, which is not recommended, as the package owner do not "sign the contract" for where the file should be located.
// import useHelloWorld from 'component/lib/hooks/useHelloWorld';

function App() {
  useHelloWorld();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
