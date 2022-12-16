import express, {Request, Response} from 'express';
import { requireAuth } from '@hjaiej/common';
import { validateRequest } from '@hjaiej/common';
import { body } from 'express-validator';
import { NotAuthorizedError } from '@hjaiej/common';
import { Ticket } from '../models/ticket';
import { NotFoundError } from '@hjaiej/common';

const router = express.Router();

router.put("/api/tickets/:id",
    requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('title required'),
        body('price')
            .isFloat({ gt: 0})
            .withMessage('price must be greater than 0')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        
        const ticket  = await Ticket.findById(req.params.id); 

        if(!ticket) {
            throw new NotFoundError();
        }

        if(ticket!.id !== req.currentUser!.id.toString()) {
            throw new NotAuthorizedError();
        } 

        const { title, price } = req.body;

        ticket.set({
            title,
            price,
         });
        
        await ticket.save();
        
        res.send(ticket);
    });
