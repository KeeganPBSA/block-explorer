import { fetchApi } from 'services/api';

const endPoints = {
	get: '/api/blocks',
};

export const get = payload => fetchApi(endPoints.get, payload, 'get');
