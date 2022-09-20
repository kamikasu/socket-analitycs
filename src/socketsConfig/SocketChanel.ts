export class SocketChanels {

    constructor (private socketServer: any) {}

    initializeChanels (client: any) {
        console.log('Se establecen canales');
        this.socketServer.emit('users', 'connect');
        client.on('eventsApiBackend', this.eventsApiBackend.bind(this));
        this.socketServer.emit('eventsApiBackend', {event: 'data1', data: {race:'lol',ticket:'test'}});
    }


    eventsApiBackend (payload: any) {
        this.socketServer.emit(payload.event, payload.data);
    }
}