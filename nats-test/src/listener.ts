import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';
//randomBytes to generate a random id

console.clear();
//to cleat cmd window from extra information related to the connectoin of the Listener to nats
 

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});

stan.on('connect', () => {
    console.log('Listener connected to NATS');

    stan.on('close',() => {
        console.log('NATS connection closed');
        process.exit();
    });

    new TicketCreatedListener(stan).listen();

}) 


stan.on('SIGINT', () => { stan.close()});
stan.on('SIGTERM', () => { stan.close()});


// Message.getData()  
// Message.getSequence => number


// when the service getting a lot of traffic there is  two ways to solves this :
// scale this service vertically : giving this service some more ram and CPU
// scale it horizently : creating a second instance of this service (
//                       - every instance of this service must have her own @id,
//                       - specify the name of queue group e.g: orders-serive-queue-group
//                       )




  
  