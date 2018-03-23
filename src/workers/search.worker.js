import TrieSearch from 'trie-search'
import {SEARCH_KEY} from '../constants'

const searcher = new TrieSearch(SEARCH_KEY, {
  ignoreCase: true
})

export function addAll(arr) {
  searcher.addAll(arr)
}

export function search(term, application, limit = 50) {
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
