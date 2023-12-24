import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import { multiFormReducer } from "./multiForm/multi-form-reducer.ts"
import { thunk, ThunkDispatch } from "redux-thunk"
import { useDispatch } from "react-redux"

export type AppRootStateType = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
  multiForm: multiFormReducer,
})
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store
