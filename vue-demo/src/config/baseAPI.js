import Axios from './axios.js'
import { setTokenSourceMapRange } from 'typescript'

import { getToken, setToken } from '@utils/methods.js'

const baseAPI = function(path,  type, params = {}){
    return new Promise((resolve, reject) => {
        if (type === 'get') {
            console.log('223')
        } else {
            // console.warn('path %s || params %s', path, params);
            Axios.post(path, params, {
                headers: {
                    'token': getToken()
                }
            }).then(res => {
                console.warn(res)
                if(res.headers.token) {
                    setToken(res.headers.token);
                }
                let data = res.data || null;

                resolve(data);
            }).catch(err => {
                reject(err);
            })
        }
    })
}

export default baseAPI 
