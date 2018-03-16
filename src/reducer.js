let defaultState = {
  frontPage: []
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FRONT_PAGE':
      return { ...state, frontPage: action.payload}
    default:
    return state
  }
}
