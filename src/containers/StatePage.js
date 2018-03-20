import React, { Component } from 'react';
import StateCard from '../components/StateCard'
import States from '../data/states.js'
import APIKEY from '../secrets.js'
import { connect } from 'react-redux'
import { fetchState, clearState } from '../actions'

class StatePage extends Component {


  getState = () => {
    let selectedState = States.filter(s => s[0] === this.props.match.params.state)
    return selectedState[0][1]
  }

  renderStateCards = () => {
    return this.props.stateParks.map( park => <StateCard key={park.parkCode} state={park}/> )
  }

  componentWillUnmount() {
    this.props.clearState()
  }

  componentDidMount() {
    this.props.fetchState(this.props.match.params.state)
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" width="100%" height="100%" /> :
          <div>
            <div className="stateMap">
              <iframe
                src={"https://www.google.com/maps/embed/v1/place?key=" + APIKEY() + "&q=" + this.getState()}
                height="600px"
                width="100%"
                ></iframe>
            </div>
            <div className='state-page-card-container container'>
              <h1>{this.getState()}</h1>
              <hr/>
              {this.renderStateCards()}
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateParks: state.stateParks,
    isLoading: state.isLoading,
    iFrameUrl: state.iFrameUrl
  }
}

export default connect(mapStateToProps, {fetchState, clearState} )(StatePage);



"https://maps.googleapis.com/maps/api/staticmap?key=YOUR_API_KEY&center=-34.172130036797704,151.47238006591792&zoom=9&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road.arterial%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x92998d&size=480x360"
