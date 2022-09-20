import { Socket } from 'socket.io';

export class SocketServer{

    private static _instance: SocketServer;

    constructor (private socketServer: any, private socketChanels: any, private socketVerifyToken: any) {
       this.initializeSocket();
    }

    public static instance (socketServer?: any, socketChanels?: any, socketVerifyToken?: any) {
        return this._instance || (this._instance = new this(socketServer, socketChanels, socketVerifyToken));
    }


    public initializeSocket () {
        console.log('Socket Server Running !!!');
        this.socketServer.use(this.socketVerifyToken).on('connect', this.chanels.bind(this));
    }

    private chanels (client: Socket){
        this.socketChanels.initializeChanels(client);
    }

    public emitEvent (eventName: string, payload: object) {
        this.socketServer.emit(eventName, payload);
    }

}