import fetchival from 'fetchival';
import apiConfig from './config';


export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
	return fetchival(`${apiConfig.url}${endPoint}`, {
		headers: headers,
	})[method.toLowerCase()](payload);
};
