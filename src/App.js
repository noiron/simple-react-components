import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import DemoScrollTop from './containers/demo-scroll-top';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Route path="/" exact component={Nav} />
          <Route path="/scroll-top" component={DemoScrollTop} />
        </Router>
      </div>
    );
  }
}

export default App;

const Nav = () => {
  return <div>
    <Link to="/scroll-top">回到顶部组件</Link>
  </div>
}
