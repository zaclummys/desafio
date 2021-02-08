export function redirectToHome () {
    window.location.hash = '/';
}

export function redirectToLogin () {
    window.location.hash = '/login';
}

export function redirectToViewTransaction (transaction) {
    window.location.hash = '/transaction/' + transaction;
}

export function redirectToEditTransaction (transaction) {
    window.location.hash = '/transaction/' + transaction + '/edit';
}

export function redirectToDeleteTransaction (transaction) {
    window.location.hash = '/transaction/' + transaction + '/delete';
}