import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button/button';
import { Container, Header, Content, Actions, Action } from '../../components/container/container';

import services from '../../services';

export default class DeleteTransaction extends React.Component {
    get transaction () {
        return this.props.match.params.transaction;
    }

    onCancelButtonClick () {
        services.redirect.redirectToViewTransaction(this.transaction);
    }

    async onConfirmButtonClick () {
        const response = await services.api.transaction.destroy(this.transaction);

        if (response.status == 200) {
            services.redirect.redirectToHome();
        }
        else if (response.status == 401) {
            services.redirect.redirectToLogin();
        }
        else if (response.status == 404) {
            services.redirect.redirectToHome();
        }
        else {
            console.error('Unknown status', response.status);
        }
    }

    render () {
        return (
            <Container>
                <Header>
                    <h1>Deletar transação</h1>

                    <Actions>
                        <Action>
                            <Link to={'/transaction/' + this.transaction}>Voltar</Link>
                        </Action>
                    </Actions>
                </Header>

                <Content>
                    <p>Você tem certeza que deseja deletar essa transação?</p>
                    
                    <p>
                        <Button onClick={() => this.onCancelButtonClick()}>Não</Button>
                        <Button onClick={() => this.onConfirmButtonClick()} style={{marginLeft: '8px'}}>Sim</Button>
                    </p>
                </Content>
            </Container>
        )
    }
}