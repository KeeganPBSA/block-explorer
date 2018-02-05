import _ from 'lodash';

import * as api from './api';

export const getMain = async () => {
    const payload = {};
    const picks = ['id','timestamp','witness', 'transactions', 'operations'];

    let response = await api.get(payload);
    let cleaned = _.map(response.blocks, _.partialRight(_.pick, picks));
    
    return cleaned;
};
