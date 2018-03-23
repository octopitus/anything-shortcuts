import Dexie from 'dexie'
import {DATABASE_NAME, SHORTCUTS_TABLE, DATABASE_SCHEMA} from '../constants'

const database = new Dexie(DATABASE_NAME)

database.version(1).stores(DATABASE_SCHEMA)

export function initShortcutsTable() {
  const shortcuts = database.table(SHORTCUTS_TABLE)

  return shortcuts.count(count => {
    if (count === 0) {
      const sketch = require('../collections/sketch.json').map(object =>
        Object.assign({}, object, {application: 'sketch'})
      )

      const photoshop = require('../collections/photoshop.json').map(object =>
        Object.assign({}, object, {application: 'photoshop'})
      )

      return Promise.all([
        shortcuts.bulkAdd(sketch),
        shortcuts.bulkAdd(photoshop)
      ])
    }
  })
}

export function getAllShortcuts() {
  return database.table(SHORTCUTS_TABLE).toArray()
}
