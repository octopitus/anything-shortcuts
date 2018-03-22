// @flow
import TrieSearch from 'trie-search'
import {SEARCH_KEY} from '../constants'

const searcher = new TrieSearch(SEARCH_KEY, {
  ignoreCase: true
})

export function addAll(arr: Array<*>) {
  searcher.addAll(arr)
}

export function search(term: string, application: string, limit: number = 50) {
  const results = searcher.get(term)

  if (application == null) {
    return results.slice(0, limit)
  }

  const itemsInCategory = []

  let indexOfItem = 0
  let i = 0

  while (indexOfItem < limit && results[i] != null) {
    if (results[i].application === application) {
      itemsInCategory[indexOfItem] = results[i]
      indexOfItem++
    }

    i++
  }

  return itemsInCategory
}
