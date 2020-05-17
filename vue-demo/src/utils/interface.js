import baseAPI from '../config/baseAPI.js';

export function getHomeOne(params = {}) {
    return baseAPI('/home/three', 'post', params);
}