export const setSearchTerm = (state, searchPattern) => ({
  search: {...state.search, pattern: searchPattern}
})
