
import React from 'react'
import { Row, Col } from 'react-materialize'


const Article = ({event}) => {
  return (
    <Row className="state-row">
      <Col s={8} className="stateCardLeft">
        <h5>{event.title}</h5>
        <span>{event.location}</span>
        <p>{event.abstract}</p>

      </Col>
      <Col s={2} className="stateCardRight">
        {/* <img className="state-card-img" src={event.images[0].url} alt={event.images[0].altText}/> */}
      </Col>
    </Row>
  )
}

export default Article
