import token from '../token';

export async function all () {
    return fetch(process.env.REACT_APP_API_HOST + '/api/transaction/all', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'authorization': 'bearer ' + token.get()
        }
    });
}

export async function get (transaction) {
    return fetch(process.env.REACT_APP_API_HOST + '/api/transaction/' + transaction, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'authorization': 'bearer ' + token.get(),
        }
    });
}

export async function create (body) {
    return fetch(process.env.REACT_APP_API_HOST + '/api/transaction/create', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'authorization': 'bearer ' + token.get(),
        },
        body: body
    });
}

export async function update (transaction, body) {
    return fetch(process.env.REACT_APP_API_HOST + '/api/transaction/' + transaction + '/update', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'authorization': 'bearer ' + token.get(),
        },
        body: body
    });
}

export async function destroy (transaction) {
    return fetch(process.env.REACT_APP_API_HOST + '/api/transaction/' + transaction + '/delete', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'authorization': 'bearer ' + token.get(),
        }
    });
}