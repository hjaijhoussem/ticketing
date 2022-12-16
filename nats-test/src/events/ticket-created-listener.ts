import { Message } from 'node-nats-streaming';
import { Listener } from "./base-listener";
import { Subjects } from './subjects'; 
import { TicketCreatedEvent } from './ticket-created-events';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
 
    subject : TicketCreatedEvent['subject'] = Subjects.TicketCreated; // name of channel (var : type = value)
    queueGroupName = 'payments-service';
  
    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
      console.log('Event data!', data);
  
      msg.ack();// tell NATS that it recieved the event so that NATS stop resending it
    }
}