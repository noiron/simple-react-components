import * as React from 'react';
import ScrollTop from './components/scrollTop';
import './App.css';

import logo from './logo.svg';
import DemoScrollTop from './containers/demo-scroll-top';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DemoScrollTop />
      </div>
    );
  }
}

export default App;
