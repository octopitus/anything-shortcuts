// @flow
import App from './components/App'

import 'milligram/dist/milligram.css'
import './style'

import {startWorkers} from './workers'

startWorkers()

export default App
