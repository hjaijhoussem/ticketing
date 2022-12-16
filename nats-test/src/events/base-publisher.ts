import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event {
    subject: Subjects;
    data: any;
}

export abstract class Publisher< T extends  Event> {
    abstract subject : T['subject'];
    private client: Stan;

    constructor(client: Stan){
        this.client = client;
    }

    publish(data: T['data']) :Promise<void> {
        return new Promise(( resolve, reject ) => {
            this.client.publish( //send data to NATS
            this.subject, 
            JSON.stringify( data ), // convert it from js data format to JSON format then send it
            (err) => {
                if( err ) { return reject(err)}
                console.log("Event published to subject ", this.subject);
                resolve();
            }

        );
        });
    }
}