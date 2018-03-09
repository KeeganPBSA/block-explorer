import { fetchApi } from 'services/api';

const endPoints = {
	get: '/api/account'	
};

export const get = payload => fetchApi(endPoints.get, payload, 'get');
