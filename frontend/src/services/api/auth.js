import token from '../token';

export function login ({ email, password }) {
    return fetch(process.env.REACT_APP_API_HOST + '/api/auth/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    });
}