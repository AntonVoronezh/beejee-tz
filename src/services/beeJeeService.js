import axios from 'axios';
import { md5 } from 'pure-md5';
import { encode } from 'uri-utils';

export default class AuthService {
	_axiosInstance = axios.create({
		baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/',
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

		const formDatar = new FormData();
		formDatar.append('username', username);
		formDatar.append('email', email);
		formDatar.append('text', text);
		formDatar.append('mimeType', 'multipart/form-data');

		const response = await this._axiosInstance.post(endPoint, formDatar);

		return this._getResourse(response, endPoint);
	};

	editTask = async (id, status, text) => {
		const endPoint = `edit/${id}?developer=anton`;
		const signature = md5(`status=${status}&text=${encode(text)}&token=beejee`);

		const formData = new FormData();
		formData.append('status', status);
		formData.append('text', text);
		formData.append('token', 'beejee');
		formData.append('signature', signature);
		formData.append('mimeType', 'multipart/form-data');

		const response = await this._axiosInstance.post(endPoint, formData);

		return this._getResourse(response, endPoint);
	};
}
