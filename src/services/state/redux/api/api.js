import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const axiosBaseQuery =
	({ baseUrl } = { baseUrl: '' }) =>
	async ({ url, method, data, params, headers }) => {
		try {
			const response = await axios({
				url: baseUrl + url,
				method,
				data,
				params,
				headers,
			})
			return { data: response.data }
		} catch (err) {
			const errorMessage = err.response
				? err.response.data.message
				: err.message
			return {
				error: {
					status: err.response?.status,
					data: errorMessage,
				},
			}
		}
	}

export const api = createApi({
	baseQuery: axiosBaseQuery({
		baseUrl: 'http://127.0.0.1:3000',
		tagTypes: ['Posts'],
	}),
	endpoints: (builder) => ({
		getCatFacts: builder.query({
			query: () => ({ url: '/get', method: 'get' }),
			transformResponse: (response) => response.data,
		}),
		postData: builder.mutation({
			query: (body) => ({
				url: '/api/v1/users/signup',
				method: 'POST',
				data: body,
			}),
			invalidatesTags: ['Posts'],
			transformResponse: (response) => response.data.newUser,
		}),
	}),
})
export const { useGetCatFactsQuery, usePostDataMutation } = api
