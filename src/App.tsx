import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Main from "./pages/main/main";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
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
            <Routes>
                <Route path={'/'} element={<Main/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
