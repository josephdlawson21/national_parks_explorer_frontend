import React, { Component } from 'react';

class StatePage extends Component {

  render() {
    return (
      <div>
        {this.props.match.params.state}
      </div>
    );
  }
}

export default StatePage;
