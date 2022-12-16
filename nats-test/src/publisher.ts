import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';
 

console.clear();
//to cleat cmd window from extra information related to the connectoin of the publisher to nots


// in some documents tey replace "stan" by "client"
const stan = nats.connect('ticketing','abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Publisher connected to NATS');

  const publisher =   new TicketCreatedPublisher(stan);
  
  publisher.publish({
    id: '123',
    title: 'concert',
    price: 20,
  });

});

// to restart the publisher after any event in cmd just type 'rs' in cmd and hit 'entry' button

// 13
