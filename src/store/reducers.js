import { combineReducers } from 'redux'

import dataReducer from './Data/reducer'

export default function createReducer() {
  return combineReducers({
    dataReducer
  })
}