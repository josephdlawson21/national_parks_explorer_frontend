export function fetchState(stateCode) {
  return function(dispatch) {
    fetch("http://localhost:3000/state/" + stateCode)
      .then(res => res.json())
      .then(json => {
        dispatch({type: "FETCH_STATE", payload: json.data})
      })
  };
}
export function fetchFrontPage() {
  return function(dispatch) {
    fetch("http://localhost:3000/parks/frontPageArticles")
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FRONT_PAGE", payload: json.data });
      });
  };
}
