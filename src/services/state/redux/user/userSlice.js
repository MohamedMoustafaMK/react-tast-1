import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstName: 's',
	lastName: '',
	userName: '',
	email: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUser: (state) => {
			return {
				...state,
				...initialState,
			}
		},
		addDefaultUser: (state, action) => {
			return {
				...state,
				...action.payload,
			}
		},
	},
})

export const { resetUser, addDefaultUser } = userSlice.actions
export default userSlice.reducer
