import axios from 'axios';

export default class AuthService {
	_axiosInstance = axios.create({
		baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/',
		// withCredentials: true,
		headers: {
			'content-type': ' application/json',
		},
	});

	_getResourse = (response, url) => {
		if (!response.status === 200) {
			throw new Error(`Could not fetch ${url}, resived ${response.status}`);
		}

		return response.data;
	};

	// tryLogin = async (email, password) => {
	// 	const endPoint = `validate`;
	// 	const data = JSON.stringify({
	// 		email,
	// 		password,
	// 	});
	// 	const response = await this._axiosInstance.post(endPoint, data);

	// 	return this._getResourse(response, endPoint);
	// };

	getTasks = async (page, filter) => {
		const endPoint = `?developer=anton&page=${page}&sort_field=${filter}&sort_direction=asc`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};
}
