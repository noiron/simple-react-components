import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DemoScrollTop from './containers/DemoScrollTop';
import DemoSoundBar from './containers/DemoSoundBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Route path="/" exact component={Nav} />
          <Route path="/scroll-top" component={DemoScrollTop} />
          <Route path="/sound-bar" component={DemoSoundBar} />
        </Router>
      </div>
    );
  }
}

export default App;

const Nav = () => {
  return <div>
    <Link to="/scroll-top">回到顶部组件</Link>
    <br />
    <Link to="/sound-bar">声音播放组件</Link>
  </div>
}
