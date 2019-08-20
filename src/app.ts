import {
    IncomingMessage,
    ServerResponse,
} from 'http';

export default (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ hello: 'world' }));
};
