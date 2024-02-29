// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { api } from './api/api'
import userReducer from './user/userSlice'
import appReducer from './app/appSlice'

const rootReducers = combineReducers({
	user: userReducer,
	app: appReducer,
	[api.reducerPath]: api.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
}

const rootPersistReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
	reducer: {
		root: rootPersistReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(api.middleware),
})

const persistor = persistStore(store)

export { store, persistor }
