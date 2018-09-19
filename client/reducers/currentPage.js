const NAVIGATE = 'NAVIGATE'

const currentPage = (state = 'listing', action) => {
  switch(action.type) {
    case NAVIGATE:
      return action.target
    default:
      return state
  }
}

export default currentPage