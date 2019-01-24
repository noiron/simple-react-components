import * as React from 'react';
import ScrollTop from './components/scrollTop';
import styled from 'styled-components';
import './App.css';

const Test = styled.div`
  color: red;
`;

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <ScrollTop />

        <Test>6666666</Test>
      </div>
    );
  }
}

export default App;
