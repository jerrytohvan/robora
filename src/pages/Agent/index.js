
import { io } from 'socket.io-client';

const enableAgent = () => {
    console.log('Initializing extension');
    const socket = io('ws://localhost:3000', {});

    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.on('disconnect', () => {
      console.log(
        'Socket disconnected'
      );
    });

    socket.emit('_ping');

    socket.on('OK', (data) => {
      console.log('Received connection from server');
    });


};

enableAgent();