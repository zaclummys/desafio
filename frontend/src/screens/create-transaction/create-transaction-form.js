import React from 'react';
import CreateTransactionFormView from './create-transaction-form-view';

import services from '../../services';

export default class CreateTransactionForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            processing: false,
            error: null,
        };
    }

    async onFormSubmit (event) {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
            error: false,
            processing: true,
        });

        const response = await services.api.transaction.create(new FormData(event.target));

        if (response.status == 200) {
            services.redirect.redirectToHome();
        }
        else if (response.status == 401) {
            services.redirect.redirectToLogin();
        }
        else if (response.status == 422) {
            this.setState({
                error: true
            });
        }
        else {
            console.error('Unexpected status:', response.status);
        }

        this.setState({
            processing: false
        });
    }

    render () {
        return (
            <CreateTransactionFormView
                error={this.state.error}
                disabled={this.state.processing}
                onFormSubmit={event => this.onFormSubmit(event)} />
        );
    }
}