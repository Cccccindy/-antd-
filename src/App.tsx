import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import MenuItem from './components/menu/item';
import './style/index.less'

function App() {
  return (
    <div className="App">
      <Menu onSelect={(index)=>alert(index)} className='AAA'>
        <MenuItem index={0}>111</MenuItem>
        <MenuItem index={1}>222</MenuItem>
        <MenuItem index={2}>333</MenuItem>
      </Menu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
