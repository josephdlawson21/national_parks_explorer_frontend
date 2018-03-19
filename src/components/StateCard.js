

import React from 'react'
import { Row, Col } from 'react-materialize'
import {NavLink} from 'react-router-dom'

const Article = ({state}) => {
  return (
    <Row className="state-row">
      {console.log(state)}
      <Col s={8} className="stateCardLeft">
        <h5>{state.designation}</h5>
        <NavLink className="state-navlink" to={"/park/" + state.parkCode}><h5>{state.name}</h5></NavLink>
        <p>{state.description}</p>

      </Col>
      <Col s={2} className="stateCardRight">
        <img className="state-card-img" src={state.images[0].url} alt={state.images[0].altText}/>
      </Col>
    </Row>
  )
}

export default Article
