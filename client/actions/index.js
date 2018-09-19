const NAVIGATE = 'NAVIGATE'

export const navigate = target => {
  return {
    type: NAVIGATE,
    target
  }
}
