import React, { Component } from 'react';
import StateCard from '../components/StateCard'
import States from '../data/states.js'
// import APIKEY from '../secrets.js'
import { connect } from 'react-redux'
import { fetchState, clearState } from '../actions'
import CoolMap from '../components/CoolMap'
import geocoder from 'geocoder'
import StatesGeodata from '../data/statesGeoData.json'
const APIKEY = process.env.REACT_APP_API_KEY
console.log(process.env.REACT_APP_API_KEY)
const APIOBJ = {key: APIKEY}


class StatePage extends Component {

  state = {
    latLong: null,
    geoData: null,
    parkCoords: []
  }


  getState = () => {
    let selectedState = States.filter(s => s[0] === this.props.match.params.state)
    return selectedState[0][1]
  }

  getStateGeodata = (state) => {
    return StatesGeodata.features.filter( featureObj => {
      let one = featureObj.properties.NAME
      let two = this.getState()
      return one.toLowerCase() === two.toLowerCase()
    })
  }

  handleParkCoords = (coords) => {
    return coords.map(coord => {
      let h = coord.latLong.split(", ")
      return { ...coord, latLong: {lat: parseFloat(h[0].slice(4)) , lng: parseFloat(h[1].slice(5)) } }
    })
  }

  renderMap = () => {
    let yo = this.props.stateParks.map( park => {
      return { name: park.fullName, latLong: park.latLong, description: park.description, parkCode: park.parkCode }
    })
    let filter = yo.filter(idk => idk.latLong)
    let result = this.handleParkCoords(filter)
    let geoJson = {
      "type": "FeatureCollection",
      "features": [this.state.geoData[0]]
    }

    return <CoolMap latLong={this.state.latLong} geoData={geoJson} parkCoords={result} />
  }

  renderStateCards = () => {
    return this.props.stateParks.map( park => {
      return <StateCard key={park.parkCode} state={park}/>
    })
  }

  componentWillUnmount() {
    this.props.clearState()
  }

  componentDidMount() {
    let location = this.getState()

    this.props.fetchState(this.props.match.params.state)

    geocoder.geocode(location, (err, data) => this.setState({
      latLong: data.results[0].geometry.location,
      geoData: this.getStateGeodata()
    }), APIOBJ)
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <img className="loading-image" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loading" /> :
          <div>
            {this.state.latLong ? this.renderMap() : null}
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
