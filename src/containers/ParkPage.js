import React, { Component } from 'react';
import { fetchPark, clearState } from '../actions'
import { Carousel } from 'react-materialize'
import { connect } from 'react-redux'
import Event from '../components/Event'
import Place from '../components/Place'
import He from 'he'
import States from '../data/states.js'
import { NavLink } from 'react-router-dom'


class ParkPage extends Component {

  getState = () => {
    let selectedState = States.filter(s => s[0] === this.props.parkData.park.data[0].states.slice(0,2))
    return selectedState[0][1]
  }

  renderEvents = () => {
    return this.props.parkData.events.data.map( event => <Event key={event.id} event={event}/>)
  }

  renderPlaces = () => {
    return this.props.parkData.places.data.map( place => <Place key={place.id} place={place}/>)
  }

  componentWillUnmount() {
    this.props.clearState()
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.parkCode)
  }

  renderCarousel = () => {
    if (this.props.parkData.park.data[0].images.length) {
      return this.props.parkData.park.data[0].images.map( park => park.url )
    } else {
      return ["http://www.kickoff.com/chops/images/resized/large/no-image-found.jpg"]
    }
  }

  handleClick = (e) => {
    console.log(this);
  }

  render() {

    return (
      <div>
        {this.props.isLoading ? <img className="loading-image" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loading" /> :
          <div>

            {this.props.parkData.park.data ? <Carousel options={{ fullWidth: true }} images={this.renderCarousel()} /> : null}


            <div className="container">
              <div className="park-page-state-link-div" >
                  {this.props.parkData.park.data ? <NavLink className="park-page-state-link" to={"/state/" + this.props.parkData.park.data[0].states.slice(0,2) }>{this.getState()}</NavLink> : null}
              </div>
              <h2 className="park-page-title">{this.props.parkData.park.data ? He.decode(this.props.parkData.park.data[0].fullName) : null}</h2>

              <p>{this.props.parkData.park.data ? this.props.parkData.park.data[0].description : null}</p>
              <hr/>

              <h3>Upcoming Events</h3>
              {this.props.parkData.events.data.length ? this.renderEvents() : "Sorry there are no upcoming events at this park my guy!"}


              <h3>Places</h3>

              {this.props.parkData.places.data.length ? this.renderPlaces() : "Sorry there are no cool places at this park my guy!"}

            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    parkData: state.parkData
  }
}

export default connect(mapStateToProps, { fetchPark, clearState })(ParkPage);
