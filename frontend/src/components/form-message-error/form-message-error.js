import React from 'react';
import FormMessageErrorStyle from './form-message-error.module.css'

export default function FormMessageError ({ children }) {
    return (
        <div className={FormMessageErrorStyle.error}>
            {children}
        </div>
    );
}