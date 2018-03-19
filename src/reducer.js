let defaultState = {
  frontPage: [],
  stateParks: []
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FRONT_PAGE':
      return { ...state, frontPage: action.payload}
    case 'FETCH_STATE':
      return { ...state, stateParks: action.payload}
    default:
    return state
  }
}
