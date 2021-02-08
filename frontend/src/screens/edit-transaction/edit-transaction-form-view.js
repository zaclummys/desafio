import React from 'react';

import Input, { Select } from '../../components/input/input';
import Button from '../../components/button/button';
import FormItem from '../../components/form-item/form-item';
import FormFooter from '../../components/form-footer/form-footer';
import FormMessageError from '../../components/form-message-error/form-message-error';

export default function EditTransactionFormView ({
    value,
    status,
    error,
    disabled,
    onFormSubmit,
}) {
    return (
        <form onSubmit={onFormSubmit}>
            <FormItem>
                <label>
                    Valor:
                    <Input disabled={disabled} defaultValue={value} name="value" type="number" min="0" max="2147483647" />
                </label>
            </FormItem>

            <FormItem>
                <label>
                    Situação:
                    <Select name="status" defaultValue={status} disabled={disabled}>
                        <option value="processing">Em processamento</option>
                        <option value="accepted">Aprovada</option>
                        <option value="denied">Negada</option>
                    </Select>
                </label>
            </FormItem>

            <FormItem>
                <label>
                    Documento:
                    <Input disabled={disabled} type="file" name="document" />
                </label>
            </FormItem>

            <FormFooter>
                {error && (
                    <FormMessageError>
                        Verifique se os campos foram preenchidos corretamente.
                    </FormMessageError>
                )}

                <Button disabled={disabled}>SALVAR</Button>
            </FormFooter>
        </form>
    );
}