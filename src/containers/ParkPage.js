import React, { Component } from 'react';
import { fetchPark, clearState } from '../actions'
import { Carousel } from 'react-materialize'
import { connect } from 'react-redux'
import Event from '../components/Event'
import Place from '../components/Place'
import He from 'he'

class ParkPage extends Component {



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
    return this.props.parkData.park.data[0].images.map( park => park.url )
  }

  handleClick = (e) => {
    console.log(this);
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loading" width="100%" height="100%" /> :
          <div>

            {this.props.parkData.park.data ? <Carousel options={{ fullWidth: true }} images={this.renderCarousel()} /> : null}


            <div className="container">
              <h2>{this.props.parkData.park.data ? He.decode(this.props.parkData.park.data[0].fullName) : null}</h2>

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
