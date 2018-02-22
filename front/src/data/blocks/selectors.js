import _ from 'lodash';

import * as api from './api';
import * as socket from './socket'


const filterBlocks = data => {
    const picks = ['id','timestamp','witness', 'transactions'];
    return _.map(data, _.partialRight(_.pick, picks));
}

export const getMain = async () => {
    let response = await api.get({});
    return filterBlocks(response['blocks']);
};

export const subscribe = async (state) => {
    const handler = (update, flags) => {
        state.handler(filterBlocks(update['blocks']));
    };
    state.dataHandler = handler;
    await socket.subscribe(state, handler);
}

export const unsubscribe = async (state) => {
    socket.unsubscribe(state);
}
