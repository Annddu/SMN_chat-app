// a reducer takes 2 arguments(current state and action obejct)
// and returns the new state based on the action type
// it s like an event handeler that determines how state should chanfe in response to actions

import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // for localStorage


const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
}

const rootReducer = combineReducers({
// TODO => create and map reducer
});

export {rootPersistConfig, rootReducer}