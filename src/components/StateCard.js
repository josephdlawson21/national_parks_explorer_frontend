

import React from 'react'
import { Row, Col } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import He from 'he'


const Article = ({state}) => {
  return (

    <Row className="state-row">
      <Col s={8} className="stateCardLeft">
        <h5>{state.designation}</h5>
        <NavLink className="state-navlink" to={"/park/" + state.parkCode}><h5>{He.decode(state.name)}</h5></NavLink>
        <p>{state.description}</p>

      </Col>
      <Col s={2} className="stateCardRight">
        {state.images.length ? <img className="state-card-img" src={state.images[0].url} alt={state.images[0].altText}/> : null }
      </Col>
    </Row>
  )
}

export default Article
