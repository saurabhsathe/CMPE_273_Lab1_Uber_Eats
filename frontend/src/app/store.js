import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'

import rootreducer from './reducer_combiner'
import logger from 'redux-logger'
const middleware = [logger]
export const store = createStore(rootreducer,applyMiddleware(...middleware))
export const persist_store = persistStore(store)
export default {store,persist_store}