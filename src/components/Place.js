
import React from 'react'
import { Row, Col } from 'react-materialize'


const imgError = (e) => {
  e.target.src = "http://www.kickoff.com/chops/images/resized/large/no-image-found.jpg"
}

const Article = ({place}) => {
  return (
    <Row className="state-row">
      <Col s={8} className="stateCardLeft">
        <h5>{place.title}</h5>
        <span>{place.location}</span>
        <p>{place.listingDescription}</p>

      </Col>
      <Col s={2} className="stateCardRight">
        {place.listingImage.url ? <img onError={(e) => imgError(e) } className="state-card-img" src={place.listingImage.url} alt={place.listingImage.altText}/> : <img className="state-card-img" src="http://www.kickoff.com/chops/images/resized/large/no-image-found.jpg" alt="broken link"/>}
      </Col>
    </Row>
  )
}

export default Article
