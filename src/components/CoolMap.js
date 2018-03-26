

import React from 'react'
import GoogleMapsLoader from 'google-maps'
import { Link } from 'react-router-dom'
import APIKEY from '../secrets.js'

GoogleMapsLoader.KEY = APIKEY()
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
        zoom: 8
      })
      this.props.parkCoords.map(coords => {
        let infoWindow = new google.maps.InfoWindow({
          // content: "<a href='/park/" + coords.parkCode + "/'>" + coords.name + "</a>"
          content: "<a href='/park/" + coords.parkCode + "/'>" + coords.name + "</a>"
          // content: coords.name
          // content: <NavLink to={'/park/'+ coords.stateCode}>{coords.name}</NavLink>
        });
        let h =  new google.maps.Marker({
          position: coords.latLong,
          map: map,
          animation: google.maps.Animation.DROP,
          title: coords.parkCode
        })

        // h.addListener('mouseover', function() {
        //     infoWindow.open(map, h);
        // });
        //
        // h.addListener('mouseout', function() {
        //     infoWindow.close();
        // });

        h.addListener('click', (e) => {
          infoWindow.open(map, h);
          // window.open("https://bing.com","_self")
          // console.log(browserHistory);
          // this.context.router.push("/park/" + e.Fa.target.title)
         // return <Redirect to={"/park/" + e.Fa.target.title} />

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

export default CoolMap;
