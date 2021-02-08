import React from 'react';

import Input from '../../components/input/input';
import Button from '../../components/button/button';
import FormMessageError from '../../components/form-message-error/form-message-error';
import FormItem from '../../components/form-item/form-item';
import FormFooter from '../../components/form-footer/form-footer';

export default function LoginFormView ({ error, disabled, onFormSubmit }) {
    return (
        <form onSubmit={onFormSubmit}>
            <FormItem>
                <label>
                    E-mail:
                    <Input type="email" name="email" required disabled={disabled} />
                </label>
            </FormItem>

            <FormItem>
                <label>
                    Senha:
                    <Input type="password" name="password" required disabled={disabled} />
                </label>
            </FormItem>

            <FormFooter>
                {error && (
                    <FormMessageError>
                        Verifique se os campos foram preenchidos corretamente.
                    </FormMessageError>
                )}

                <Button disabled={disabled}>ENTRAR</Button>
            </FormFooter>
        </form>
    );
}