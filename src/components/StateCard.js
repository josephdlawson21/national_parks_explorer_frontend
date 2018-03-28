

import React from 'react'
import { Row, Col } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import He from 'he'

const imgError = (e) => {
  e.target.src = "http://www.kickoff.com/chops/images/resized/large/no-image-found.jpg"
}



const Article = ({state}) => {
  return (

    <Row className="state-row">
      <Col s={8} className="stateCardLeft">
        <span className="state-card-designation">{state.designation}</span>
        <NavLink className="state-navlink" to={"/park/" + state.parkCode}><h4 className="state-card-title">{He.decode(state.name)}</h4></NavLink>
        <p className="state-card-body">{state.description}</p>

      </Col>
      <Col s={2} className="stateCardRight">
        {state.images.length ? <img onError={(e) => imgError(e) } className="state-card-img" src={state.images[0].url} alt={state.images[0].altText}/> : <img className="state-card-img" src="http://www.kickoff.com/chops/images/resized/large/no-image-found.jpg" alt="broken link"/> }
      </Col>
    </Row>
  )
}

export default Article
