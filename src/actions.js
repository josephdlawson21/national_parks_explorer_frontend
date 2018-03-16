

export const fetchState = (stateCode) => {
  return {
    type: "FETCH_STATE",
    payload: {
      stateCode: stateCode
    }
  }
}
export function fetchFrontPage() {
  return function(dispatch){
    fetch('http://localhost:3000/parks/frontPageArticles')
    .then(res => res.json())
    .then((json) => {
      dispatch({type: "FRONT_PAGE", payload: json.data})
    })
  }
}
