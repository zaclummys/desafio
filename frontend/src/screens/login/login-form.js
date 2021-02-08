import React from 'react';
import LoginFormView from './login-form-view';

import services from '../../services';

export default class LoginForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            processing: false,
            error: false,
        };
    }

    async onFormSubmit (event) {
        event.preventDefault();
        event.stopPropagation();

        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        this.setState({
            error: false,
            processing: true,
        });

        const response = await services.api.auth.login({
            email,
            password,
        });

        if (response.status == 200) {
            const payload = await response.json();

            services.token.store(payload.token);
            services.redirect.redirectToHome();
        }
        else if (response.status == 401 || response.status == 422) {
            this.setState({
                error: true
            });
        }
        else {
            console.error('Unexpected status', response.status);
        }

        this.setState({
            processing: false
        });
    }

    render () {
        return <LoginFormView
            error={this.state.error}
            disabled={this.state.processing}
            onFormSubmit={event => this.onFormSubmit(event)} />;
    }
}

