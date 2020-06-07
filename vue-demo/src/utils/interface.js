import baseAPI from '../config/baseAPI.js';

export function getHomeOne(params = {}) {
    params = {
        name: 'yahahah'
    }
    return baseAPI('/home/three', 'post', params);
}