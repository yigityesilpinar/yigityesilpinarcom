import * as React from "react";
import { hot } from "react-hot-loader";
import Home from "src/views/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default hot(module)(App);
