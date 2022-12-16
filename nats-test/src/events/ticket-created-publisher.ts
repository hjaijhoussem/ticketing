import { TicketCreatedEvent } from "./ticket-created-events";
import { Subjects } from "./subjects";
import { Publisher } from "./base-publisher";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: TicketCreatedEvent['subject'] = Subjects.TicketCreated;
}
