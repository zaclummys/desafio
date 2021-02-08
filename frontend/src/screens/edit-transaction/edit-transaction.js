import React from 'react';
import { Link } from 'react-router-dom';

import services from '../../services';
import { Container, Header, Content, Actions, Action } from '../../components/container/container';
import EditTransactionForm from './edit-transaction-form';

export default class EditTransaction extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            transaction: null
        };
    }

    get transaction () {
        return this.props.match.params.transaction;
    }

    async componentDidMount () {
        const response = await services.api.transaction.get(this.transaction);

        if (response.status == 200) {
            const transaction = await response.json();

            this.setState({
                transaction: transaction
            });
        }
        else if (response.status == 401) {
            services.redirect.redirectToLogin();
        }
        else if (response.status == 404) {
            services.redirect.redirectToHome();
        }
    }

    render () {
        const transaction = this.state.transaction;

        return (
            <Container>
                <Header>
                    <h1>Editar transação</h1>

                    <Actions>
                        <Action>
                            <Link to={'/transaction/' + this.transaction}>Voltar</Link>
                        </Action>
                    </Actions>
                </Header>

                <Content>
                    {transaction && (
                        <EditTransactionForm
                            transaction={transaction}
                            onFormSubmit={event => this.onFormSubmit(event)} />
                    )}
                </Content>
            </Container>
        );
    }
}