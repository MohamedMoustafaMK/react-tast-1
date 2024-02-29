// usePostData.js
import { usePostDataMutation } from '../services/state/redux/api/api'

const usePostData = () => {
	const [postData, { data, error, isLoading }] = usePostDataMutation()

	const userSignup = async (requestBody) => {
		try {
			const response = await postData(requestBody)
			return response
		} catch (err) {
			throw err
		}
	}

	return { userSignup, data, error, isLoading }
}

export default usePostData
