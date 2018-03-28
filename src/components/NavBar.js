

import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchForPark } from '../actions'

class Header extends React.Component {

  state = {
    search: ""
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.firstChild.firstChild.blur()
    this.props.searchForPark(this.state.search)
    this.setState({
      search: ""
    });
    this.props.history.push("/search")
  }


  render () {
    return (
      <div className="navbar-fixed">
        <nav>
         <div className="nav-wrapper black fixed">
           <NavLink className="nav-logo nav-bar-title" to={"/"}>National Parks Explorer</NavLink>
           <form className="right search-bar" onSubmit={this.handleSubmit} >
             <div className="input-field">
               <input id="search" type="search" value={this.state.search} placeholder="Search by Park Name" onChange={this.handleChange} required/>
               <label className="label-icon"><i className="material-icons">search</i></label>
               <i className="material-icons">close</i>
             </div>
           </form>
         </div>
       </nav>
      </div>
    )
  }
}

export default withRouter(connect(null, { searchForPark })(Header))
