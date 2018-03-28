

import React from 'react'
import GoogleMapsLoader from 'google-maps'
import MapStyle from '../data/MapStyle.json'
import { withRouter } from 'react-router-dom'
// import APIKEY from '../secrets.js'
const APIKEY = process.env.REACT_APP_API_KEY
console.log(process.env.REACT_APP_API_KEY)


GoogleMapsLoader.KEY = APIKEY
GoogleMapsLoader.LIBRARIES = ['geometry', 'places', 'drawing']


class CoolMap extends React.Component {

  clickHandle = (e) => {
    console.log(e.target);
  }


  componentDidMount() {
    var bounds;
    let map;

    GoogleMapsLoader.load((google) => {
      bounds = new google.maps.LatLngBounds()
      map = new google.maps.Map(document.getElementById('map'), {
        center: this.props.latLong,
        zoom: 8,
        styles: MapStyle
      })
      this.props.parkCoords.map(coords => {
        let infoWindow = new google.maps.InfoWindow({
          content: "<a href='/park/" + coords.parkCode + "/'>" + coords.name + "</a>"
        });
        let h =  new google.maps.Marker({
          position: coords.latLong,
          map: map,
          animation: google.maps.Animation.DROP,
          title: coords.parkCode
        })



        h.addListener('click', (e) => {
          if (infoWindow.opened) {
            infoWindow.opened = false
            h.setAnimation(null)
            infoWindow.close();
          } else {
            infoWindow.opened = true
            h.setAnimation(google.maps.Animation.BOUNCE)
            infoWindow.open(map, h);
          }
        })

        return h
      })
    })

    setTimeout(() => {
      map.data.addGeoJson(this.props.geoData)
      map.data.setStyle({ fillColor: 'grey', strokeWeight: 1 })
      map.data.forEach(function(feature){
        feature.getGeometry().forEachLatLng(function(latlng){
           bounds.extend(latlng);
        });
      });

      map.fitBounds(bounds);
    }, 1000);

  }


  render () {
    return(
      <div id="map">

      </div>
    )
  }
}

export default withRouter(CoolMap);
