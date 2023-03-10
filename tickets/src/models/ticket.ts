import mongoose from 'mongoose';

interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}

interface TicketDoc extends mongoose.Document {
  title: number;
  price: number;
  userId: string;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  }
    /* {
      toJSON: {
        transform(doc, ret) {
          delete ret.password;
          delete ret.__v;
        }
      }
    }  */
  );

  ticketSchema.methods.toJSON = function() {
    var obj = this.toObject();
    obj.id = obj._id;
    delete obj._id;
    return obj;
   };


   ticketSchema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket(attrs);
  };
  
  const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);
  
  export { Ticket };