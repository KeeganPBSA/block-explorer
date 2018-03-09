import * as api from './api';

export const getMain = async () => {
    let response = await api.get({});
    return response[0]
};