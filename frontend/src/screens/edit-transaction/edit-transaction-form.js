import React from 'react';
import services from '../../services';
import EditTransactionFormView from './edit-transaction-form-view';

export default class EditTransactionForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            error: false,
            processing: false,
        };
    }

    get transaction () {
        return this.props.transaction.id;
    }

    async onFormSubmit (event) {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
            error: false,
            processing: true,
        });

        const response = await services.api.transaction.update(this.transaction, new FormData(event.target));

        if (response.status == 200) {
            services.redirect.redirectToViewTransaction(this.transaction);
        }
        else if (response.status == 401) {
            services.redirect.redirectToLogin();
        }
        else if (response.status == 404) {
            services.redirect.redirectToHome();
        }
        else if (response.status == 422) {
            this.setState({
                error: true
            });
        }
        else {
            console.error('Unknown status', response.status);
        }

        this.setState({
            processing: false
        });
    }

    render () {
        const transaction = this.props.transaction;

        return (
            <EditTransactionFormView
                value={transaction.value}
                status={transaction.status}
                disabled={this.state.processing}
                error={this.state.error}
                onFormSubmit={event => this.onFormSubmit(event)} />
        );
    }
}
