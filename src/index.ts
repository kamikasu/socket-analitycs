import { SocketServer } from './socketsConfig/SocketServer';
import { SocketChanels } from './socketsConfig/SocketChanel';
import SocketTokenVerify from './socketsConfig/SocketTokenVerify';
import * as dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config();

function normalizePort(val: string) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

const WEBSOCKET_CONFIG = {
    cors: {
        origin: true,
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
}

const io = new Server(WEBSOCKET_CONFIG);
var port = normalizePort(process.env.PORT || '3100');
io.listen(port as number);

SocketServer.instance(io, new SocketChanels(io), SocketTokenVerify);