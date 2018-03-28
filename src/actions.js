export function fetchState(stateCode) {
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    fetch("https://national-parks-backend.herokuapp.com/state/" + stateCode)
      .then(res => res.json())
      .then(json => {
        dispatch({type: "FETCH_STATE", payload: json.data})
      })
      .then(res => dispatch({type: 'DONE_LOADING'}))
  };
}

export function fetchPark(parkCode) {
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    fetch("https://national-parks-backend.herokuapp.com/parks/" + parkCode)
      .then(res => res.json())
      .then(json => {
        dispatch({type: "FETCH_PARK", payload: json})
      })
      .then(res => dispatch({type: 'DONE_LOADING'}))
  };
}

export function fetchFrontPage() {
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    fetch("https://national-parks-backend.herokuapp.com/parks/frontPageArticles")
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FRONT_PAGE", payload: json.data });
      })
      .then(res => dispatch({type: 'DONE_LOADING'}));
  };
}

export function searchForPark(query) {
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    fetch("https://national-parks-backend.herokuapp.com/parks/search/" + query)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "SEARCH_RESULTS", payload: json.data });
      })
      .then(res => dispatch({type: 'DONE_LOADING'}));
  };
}

export function clearState() {
  return function(dispatch) {
    dispatch({type: 'CLEARSTATE'})
  };
}
