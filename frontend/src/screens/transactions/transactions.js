import React from 'react';
import { Link } from 'react-router-dom';

import services from '../../services';

import { Container, Header, Content, Actions, Action } from '../../components/container/container';

import TransactionTable from './transaction-table';

export default class Transactions extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            transactions: []
        };
    }

    async componentDidMount () {
        const response = await services.api.transaction.all();

        if (response.status == 200) {
            this.setState({
                transactions: await response.json()
            });
        }
        else if (response.status == 401) {
            services.redirect.redirectToLogin();
        }
        else {
            console.error('Unknown status', response.status);
        }
    }

    renderContent () {
        if (this.state.transactions.length == 0) {
            return <p>Ainda não há transações criadas.</p>;
        }

        return <TransactionTable transactions={this.state.transactions} />;
    }

    render () {
        return (
            <Container>
                <Header>
                    <h1>Transações</h1>

                    <Actions>
                        <Action>
                            <Link to="/transaction/create">Criar transação</Link>
                        </Action>
                        <Action>
                            <Link to="/logout">Sair</Link>
                        </Action>
                    </Actions>
                </Header>

                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        );
    }
}