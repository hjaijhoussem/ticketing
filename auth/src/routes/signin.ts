import express, {Request, Response} from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "@hjaiej/common";
import { Password } from "../services/password";
import { validateRequest } from "@hjaiej/common";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post('/api/users/signin', 
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must suppy a passwordss')
    ], 
    validateRequest, 
    async (req: Request, res: Response) => {

        const { email, password } = req.body;
        
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            throw new BadRequestError('Email not found');
        }

        const passwordMatche = await Password.compare(existingUser.password, password);

        if(!passwordMatche) {
            throw new BadRequestError('Incorrect password');
        }

        // Generate JWT 
        const userJwt = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email
            },
            process.env.JWT_KEY!
        );
  
        // Store in on session object
        req.session = { // in case we don't use typescript we replace this with : req.session.jwt = userJwt
            jwt: userJwt
        };
    
        res.status(200).send(existingUser);
});

export { router as signinRouter };