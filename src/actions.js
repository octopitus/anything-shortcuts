// @flow
export const setSearchTerm = (state: Object, searchPattern: string) => ({
  search: {...state.search, pattern: searchPattern}
})
