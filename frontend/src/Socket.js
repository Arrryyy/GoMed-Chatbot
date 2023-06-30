import SocketIO from 'socket.io-client';
const SOCKET_URL = 'localhost:3001';

let socket = SocketIO(SOCKET_URL);

export default socket;