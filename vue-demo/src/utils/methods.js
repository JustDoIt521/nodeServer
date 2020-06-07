export const staticVar = {
    localStorageToken: 'vue_demo_token'
}

export function setToken (token = '') {
    localStorage.setItem(staticVar.localStorageToken, token);
}

export function getToken (type) {
    return localStorage.getItem(staticVar.localStorageToken);
}

export default {}