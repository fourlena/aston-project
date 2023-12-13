import {combineReducers, configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: rootReducer,
})
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store