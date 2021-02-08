import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from '../../screens/login/login';
import Logout from '../../screens/logout/logout';
import Transactions from '../../screens/transactions/transactions';
import ViewTransaction from '../../screens/view-transaction/view-transaction';
import EditTransaction from '../../screens/edit-transaction/edit-transaction';
import CreateTransaction from '../../screens/create-transaction/create-transaction';
import DeleteTransaction from '../../screens/delete-transaction/delete-transaction';

import services from '../../services';

function AuthenticatedRoute (props) {
    if (null == services.token.get()) {
        return <Redirect to="/login" />;
    }

    return <Route {...props} />;
}

export default class App extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            user: null
        };
    }
    
    render () {
        const user = this.state.user;

        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <AuthenticatedRoute exact path="/" component={Transactions} />
                    <AuthenticatedRoute exact path="/transaction/create" component={CreateTransaction} />
                    <AuthenticatedRoute exact path="/transaction/:transaction" component={ViewTransaction} />
                    <AuthenticatedRoute exact path="/transaction/:transaction/edit" component={EditTransaction} />
                    <AuthenticatedRoute exact path="/transaction/:transaction/delete" component={DeleteTransaction} />
                </Switch>
            </HashRouter>
        );
    }
}