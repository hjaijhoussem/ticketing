import express, { Request, Response} from 'express';
import { body } from 'express-validator';
import { BadRequestError } from "@hjaiej/common";
import { User } from '../models/user';
import { validateRequest } from "@hjaiej/common";
import  jwt  from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters'),
  ], validateRequest,
  async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if(existingUser) {
      throw new BadRequestError('email in use');
    }
    
    const user = User.build({ email, password});
    await user.save();

    // Generate JWT 
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_KEY!
    );

    // Store in on session object
    req.session = { // in case we don't use typescript we replace this with : req.session.jwt = userJwt
      jwt: userJwt
    };
 
    res.status(201).send(user);
});
   
export { router as signupRouter };