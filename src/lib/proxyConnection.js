import Axios from 'axios';
import {proxyTimeout, proxyUrl} from './../config/proxy';
import {isProduction} from "../config/env";
import Qs from 'qs';

const ProxyAxios = Axios.create({
    baseURL: proxyUrl,
    timeout: proxyTimeout,
    headers: {
        'Accept': 'application/json',
    },

});


ProxyAxios.interceptors.response.use((response) => {

    if (!isProduction) {
    }

    if (response.data.status == 'success') {

        if (!isProduction) {
            console.info('Successfull response data: ', response.data);
        }

        return response.data.data;
    } else {

        if (!isProduction) {
            console.error('Reponse with error: ', response);
        }

        return Promise.reject('No successfull response');
    }

}, (error) => {

    if (!isProduction) {
        console.error('Error is: ', e);
    }

    return Promise.reject(error);
});

export function churchToolsQuery(module, func, data) {

    const requestData = {
        m: module,
        f: func,
        data: data
    };

    return ProxyAxios.post('', Qs.stringify(requestData), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

}

