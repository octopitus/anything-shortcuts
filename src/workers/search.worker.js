// @flow
import TrieSearch from 'trie-search'
import {SEARCH_KEY} from '../constants'

const searcher = new TrieSearch(SEARCH_KEY, {
  ignoreCase: true
})

export function addAll(arr: Array<*>) {
  searcher.addAll(arr)
}

export function search(term: string, limit: number = 50) {
  return searcher.get(term).slice(0, limit)
}
