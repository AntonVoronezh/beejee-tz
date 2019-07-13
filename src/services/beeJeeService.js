import axios from 'axios';

export default class AuthService {
	_axiosInstance = axios.create({
		baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/',
		// withCredentials: true,
		headers: {
			'content-type': 'application/json',
		},
	});

	_getResourse = (response, url) => {
		if (!response.status === 200) {
			throw new Error(`Could not fetch ${url}, resived ${response.status}`);
		}

		return response.data;
	};

	getTasks = async (page, filter) => {
		const endPoint = `?developer=anton&page=${page}&sort_field=${filter}&sort_direction=asc`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};

	createTask = async (username, email, text) => {
		const endPoint = `create?developer=anton`;

		const formData = new FormData();
		formData.append('username', username);
		formData.append('email', email);
		formData.append('text', text);
		formData.append('mimeType', 'multipart/form-data');

		const response = await this._axiosInstance.post(endPoint, formData);

		return this._getResourse(response, endPoint);
	};
}
