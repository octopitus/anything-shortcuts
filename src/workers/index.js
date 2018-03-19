// @flow
import invariant from 'invariant'

// $FlowFixMe
import startSearchWorker from './search.worker.js'
// $FlowFixMe
import startDatabaseWorker from './database.worker.js'

let databaseWorker = null
let searchWorker = null

export function getWorkers() {
	invariant(
		databaseWorker != null && searchWorker != null,
		"Workers hasn't initialized yet"
	)

	return {
		search: searchWorker,
		database: databaseWorker
	}
}

export function startWorkers() {
	searchWorker = startSearchWorker()
	databaseWorker = startDatabaseWorker()
}
