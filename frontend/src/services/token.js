export function store (token) {
    window.localStorage.setItem('token', token);
}

export function get () {
    return window.localStorage.getItem('token');
}

export function destroy () {
    window.localStorage.removeItem('token');
}

export default {
    get,
    store,
    destroy,
};