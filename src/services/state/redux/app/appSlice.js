import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	language: 'en',
	theme: 'light',
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLanguage: (state, action) => {
			state.language = action.payload
		},
		setTheme: (state, action) => {
			state.theme = action.payload
		},
	},
})

export const { setLanguage, setTheme } = appSlice.actions
export const languageSelector = (state) => state.root.app.language
export const themeSelector = (state) => state.root.app.theme

export default appSlice.reducer
