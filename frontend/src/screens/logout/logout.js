import React from 'react';
import services from '../../services';

export default class Logout extends React.Component {
    componentDidMount () {
        services.token.destroy();
        services.redirect.redirectToLogin();
    }

    render () {
        return null;
    }
}