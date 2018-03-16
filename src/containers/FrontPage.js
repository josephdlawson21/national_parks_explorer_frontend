import React, { Component } from 'react';
import Article from '../components/Article'
import States from '../data/states.js'
import {NavLink} from 'react-router-dom'
import {Button, Dropdown, NavItem} from 'react-materialize'


class FrontPage extends Component {
  state = {
    articles: []
  }

  renderArticles = () => {
    return this.state.articles.map((article, i) => {
      if (i < 2) {
        return <Article article={article} width="6"/>
      } else {
        return <Article article={article} width="4"/>
      }
    })
  }

  stateOptions = () => {
    return States.map( arr => {
      return <li><NavLink to={"/state/" + arr[0]}>{arr[1]}</NavLink></li>
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/parks/frontPageArticles')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          articles: json.data
        });
      })
  }

  render() {
    return (
      <div>
        <div className="frontPageImgDiv">
          <div className="searchBarOnPic">
            <div className="searchBar container">
              <Dropdown trigger={
                  <div className="stateSelector">Search for Park by State</div>
                }>
                {this.stateOptions()}
              </Dropdown>
            </div>
          </div>
        </div>
        <div className='front-page-card-container container'>
          <div className="row">
            {this.renderArticles()}
          </div>
        </div>
        <NavLink to='/yo'> hello</NavLink>
      </div>
    );
  }
}

export default FrontPage;
