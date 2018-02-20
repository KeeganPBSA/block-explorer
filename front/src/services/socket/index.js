import Nes from 'nes/client';
import socketConfig from './config';

export const connect = async () => {
    const client = new Nes.Client(`${socketConfig.uri}`);
    await client.connect();
    return client;
}
