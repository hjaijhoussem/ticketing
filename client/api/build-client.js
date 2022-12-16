import axios from 'axios';

export default ({ req }) => {
    if(typeof window === 'undefined') {
        //we are in the server

        return axios.create({
            baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
            headers: req.headers // in case we are in the client there no need to set this because browesr will handle it for us
        });
    }else {
        //we must be on the browser
        return axios.create({
            baseURL: '/'
        });
    }
}