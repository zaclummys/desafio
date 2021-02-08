import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Content, Actions, Action } from '../../components/container/container';

import CreateTransactionForm from './create-transaction-form';

export default function CreateTransaction () {
    return (
        <Container>
            <Header>
                <h1>Criar transação</h1>

                <Actions>
                    <Action>
                        <Link to="/">Voltar</Link>
                    </Action>
                </Actions>
            </Header>

            <Content>
                <CreateTransactionForm />
            </Content>
        </Container>
    );
}