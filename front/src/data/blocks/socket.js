import { connect } from 'services/socket';

const paths = {
	blocks: '/blocks',
};

export const subscribe = async (state)  => {
    if (!state.client) {
        state.client = await connect();
        console.log(`data/block/socket.js client ${state.client}`);
    }
    state.client.subscribe(paths.blocks, state.dataHandler);
}

export const unsubscribe = (state)  => {
    state.client.unsubscribe(paths.blocks, state.dataHandler);
}
