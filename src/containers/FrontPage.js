import React, { Component } from 'react';
import Article from '../components/Article'
import States from '../data/states.js'
import {NavLink} from 'react-router-dom'
import { Dropdown } from 'react-materialize'
import { connect } from 'react-redux'
import { fetchFrontPage } from '../actions'


class FrontPage extends Component {
  state = {
    articles: []
  }

  renderArticles = () => {
    return this.props.articles.map((article, i) => {
      if (i < 2) {
        return <Article key={i} article={article} width="6"/>
      } else {
        return <Article key={i} article={article} width="4"/>
      }
    })
  }

  stateOptions = () => {
    return States.map( arr => {
      return <li key={arr[0]} ><NavLink to={"/state/" + arr[0]}>{arr[1]}</NavLink></li>
    })
  }

  componentDidMount() {
    this.props.fetchFrontPage()
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
          <h3>Articles</h3>
          <hr/>
          <div className="row">
            {this.props.articles ? this.renderArticles() : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.frontPage
  }
}

export default connect(mapStateToProps, { fetchFrontPage })(FrontPage);
