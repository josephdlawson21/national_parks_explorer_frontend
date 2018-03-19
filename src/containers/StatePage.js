import React, { Component } from 'react';
import StateCard from '../components/StateCard'
import States from '../data/states.js'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchState } from '../actions'

class StatePage extends Component {


  getState = () => {
    let thing = States.filter(s => s[0] === this.props.match.params.state)
    return thing[0][1]
  }

  renderStateCards = () => {
    return this.props.stateParks.map( park => <StateCard state={park}/>)
  }

  componentDidMount() {
    this.props.fetchState(this.props.match.params.state)
  }

  render() {
    return (
      <div>
        <div className="stateMap">
          map
        </div>
        <div className='state-page-card-container container'>
          <h1>{this.getState()}</h1>
          <hr/>
          {this.renderStateCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateParks: state.stateParks
  }
}

export default connect(mapStateToProps, {fetchState} )(StatePage);
