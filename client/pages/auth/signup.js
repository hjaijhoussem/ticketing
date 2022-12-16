import { useState } from 'react'; 
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors }  = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email,password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmitHandler =  (event) => {
        event.preventDefault();

        doRequest();

    }

    return (
        <form onSubmit={onSubmitHandler} className="m-4">
            <h1>Sign Up</h1>
            <div className="Form-group">
                <label>Email Adress</label>
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="form-control"/>
            </div>
            <div className="Form-group">
                <label>Password</label>
                <input  
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-control"/>
            </div>
            {errors}
            <button className="btn  btn-primary mt-2">Sign Up</button>
        </form>
    );
}