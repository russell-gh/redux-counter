import React, { Component } from "react";
import { connect } from "react-redux";
import Controls from "./components/Controls";

class App extends Component {
  render() {
    const { count, name } = this.props;
    return (
      <>
        <h1>
          {name} {count}
        </h1>
        <Controls />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}

export default connect(mapStateToProps)(App);
