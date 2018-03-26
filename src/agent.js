import superagentPromise from 'superagent-promise';
import { _superagent } from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const reponseBody = res => res.body;

let token = null;

const tokenPlugin = req => {
    if(token) {
        req.set('authorization', `Token${token}`);
    }
}

const requests = {
    del: url => {
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody);
    }
}