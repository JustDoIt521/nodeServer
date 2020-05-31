import Axios from './axios.js'

const baseAPI = function(path,  type, params = {}){
    return new Promise((resolve, reject) => {
        if (type === 'get') {
            console.log('223')
        } else {
            // console.warn('path %s || params %s', path, params);
            Axios.post(path, params).then(res => {
                // console.warn('')
                let data = res.data || null;

                resolve(data);
            }).catch(err => {
                reject(err);
            })
        }
    })
}

export default baseAPI 
