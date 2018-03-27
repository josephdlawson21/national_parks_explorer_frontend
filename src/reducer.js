let defaultState = {
  frontPage: [],
  stateParks: [],
  searchResults: [],
  isLoading: false,
  parkData: {park: {}, events: {data: []}, places: {data: []}},
  iFrameUrl: ''
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FRONT_PAGE':
      return { ...state, frontPage: action.payload}
    case 'FETCH_STATE':
      return { ...state, stateParks: action.payload}
    case 'FETCH_PARK':
      return { ...state, parkData: action.payload}
    case 'SEARCH_RESULTS':
      return { ...state, searchResults: action.payload}
    case 'LOADING':
      return { ...state, isLoading: true}
    case 'DONE_LOADING':
      return { ...state, isLoading: false}
    case 'CLEARSTATE':
      return { ...defaultState }
    default:
    return state
  }
}
