

import React from 'react'
import StateCard from '../components/StateCard'
import { connect } from 'react-redux'


class SearchResults extends React.Component {

  renderResults = () => {
    if (this.props.searchResults.length) {
      return this.props.searchResults.map( park => {
        return <StateCard key={park.parkCode} state={park}/>
      })
    } else {
      return <h3>Nothing was found</h3>
    }
  }


  render() {
    return (
      <div>
        {this.props.isLoading ? <img className="loading-image" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loading" /> :
        <div className='container'>
          <h1>Search Results</h1>
          <hr/>
          {this.renderResults()}
        </div>}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps)(SearchResults)
