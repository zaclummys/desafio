import React from 'react';
import TransactionTableStyle from './transaction-table.module.css';

import DropdownMenu, { MenuItem } from '../../components/dropdown-menu/dropdown-menu';

import {
    redirectToViewTransaction,
    redirectToEditTransaction,
    redirectToDeleteTransaction,
} from '../../services/redirect';

import {
    formatTransactionDate,
    getTransactionStatusDescription,
} from '../../services/display';

export function TransactionRow ({ transaction }) {
    return (
        <tr onClick={() => redirectToViewTransaction(transaction.id)}>
            <td>R$ {transaction.value}</td>
            <td>{formatTransactionDate(transaction.created_at)}</td>
            <td>{getTransactionStatusDescription(transaction.status)}</td>
            
            <td align="right">
                <DropdownMenu>
                    <MenuItem onClick={() => redirectToViewTransaction(transaction.id)}>Ver</MenuItem>
                    <MenuItem onClick={() => redirectToEditTransaction(transaction.id)}>Editar</MenuItem>
                    <MenuItem onClick={() => redirectToDeleteTransaction(transaction.id)}>Excluir</MenuItem>
                </DropdownMenu>
            </td>
        </tr>
    );
}

export default function TransactionTable ({ transactions }) {
    return (
        <table className={ TransactionTableStyle.table }>
            <thead>
                <tr>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Situação</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => <TransactionRow key={transaction.id} transaction={transaction} />)}
            </tbody>
        </table>
    )
}
