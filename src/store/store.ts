import { combineReducers, legacy_createStore as createStore } from "redux"
import { multiFormReducer } from "./multiForm/multi-form-reducer.ts"

export type AppRootStateType = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
  multiForm: multiFormReducer,
})

export const store = createStore(rootReducer)
