export = function verifyToken(socket: any, next: any){
    console.log('Ingresa y hace conexion', socket.handshake.query.token);
    if(socket.handshake.query.token == 'BACKENDCLIENTSOCKET'){
      console.log('habilitado el backend');
      next();
    }
}