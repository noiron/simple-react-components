import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import DemoScrollTop from './containers/demo-scroll-top';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <Route path="/scroll-top" component={DemoScrollTop} />
        </Router>
      </div>
    );
  }
}

export default App;
