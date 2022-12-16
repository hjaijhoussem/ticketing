import  express, { Request, Response }  from "express";
import { requireAuth, validateRequest } from "@hjaiej/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";

const router =  express.Router();

router.post('/api/tickets', requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('title required'),
        body('price')
            .isFloat( { gt:0 })
            .withMessage('price must be greater than 0 ')
    ],
    validateRequest,
    async ( req: Request, res: Response ) => {
        
        const { title, price } = req.body;

        const ticket = Ticket.build({ 
            title, 
            price, 
            userId: req.currentUser!.id.toString()
        });
        await ticket.save();

        res.status(201).send(ticket);
}); 

export { router as createTicketRouter }