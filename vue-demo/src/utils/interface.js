import baseAPI from '../config/baseAPI.js';

export function getHomeOne() {
    return baseAPI('/home/three', 'post');
}