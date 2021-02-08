import React from 'react';
import { Link } from 'react-router-dom';

import services from '../../services';

import {
    formatTransactionDate,
    getTransactionStatusDescription,
} from '../../services/display';

import {
    Container,
    Header,
    Content,
    Actions,
    Action,
} from '../../components/container/container';

function ViewTransactionView ({ transaction }) {
    return (
        <Container>
            <Header>
                <h1>Transação</h1>

                {transaction && (
                    <Actions>
                        <Action>
                            <Link to={'/transaction/' + transaction.id + '/edit'}>
                                Editar
                            </Link>
                        </Action>

                        <Action>
                            <Link to={'/transaction/' + transaction.id + '/delete'}>
                                Deletar
                            </Link>
                        </Action>
                    </Actions>
                )}
            </Header>

            <Content>
                {transaction && (
                    <div>
                        <p>
                            <b>ID:</b> {transaction.id}
                        </p>
                        <p>
                            <b>Valor:</b> R$ {transaction.value}
                        </p>

                        <p>
                            <b>Data:</b> {formatTransactionDate(transaction.date)}
                        </p>

                        <p>
                            <b>Situação:</b> {getTransactionStatusDescription(transaction.status)}
                        </p>

                        <p>
                            <b>Documento:</b> <a href={transaction.document} target="_blank" download>Download</a>
                        </p>
                    </div>
                )}
            </Content>
        </Container>
    );
}

export default class ViewTransaction extends React.Component {
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
            this.setState({
                transaction: await response.json()
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
        return <ViewTransactionView transaction={this.state.transaction} />;
    }
}