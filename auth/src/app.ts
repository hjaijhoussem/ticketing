import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHndler } from "@hjaiej/common";
import { NotFoundError } from "@hjaiej/common";
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy',true); // because we use ingress-ingenx
app.use(json());

app.use(
    cookieSession({
        signed: false, // do not encrypt the cookie content
        //secure: true // that means that cookies only been used if a user visit our  application over https request
        secure: process.env.NODE_ENV !== 'test'
        // it means that if we in test then put secure to false 
        // because 'supertest' it send http not https request
    })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);


// in case we use async key word we have to :
//  use next(new NotFoundError);
//              OR
// install a package 'express-async-errors' : npm install express-async-errors
// that we import it just next to express import
// and that's it 
app.get('*', async () => { // in this case we can replace .get to .all
    throw new NotFoundError();
});

app.use(errorHndler);

export { app }