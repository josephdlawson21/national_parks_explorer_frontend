
import React from 'react'
import { Row, Col } from 'react-materialize'


const Article = ({place}) => {
  return (
    <Row className="state-row">
      <Col s={8} className="stateCardLeft">
        <h5>{place.title}</h5>
        <span>{place.location}</span>
        <p>{place.listingDescription}</p>

      </Col>
      <Col s={2} className="stateCardRight">
        <img className="state-card-img" src={place.listingImage.url} alt={place.listingImage.altText}/>
      </Col>
    </Row>
  )
}

export default Article
