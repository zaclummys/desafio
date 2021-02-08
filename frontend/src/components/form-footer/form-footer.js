import React from 'react';
import FormFooterStyle from './form-footer.module.css'

export default function FormFooter ({ children }) {
    return (
        <div className={FormFooterStyle.footer}>
            {children}
        </div>
    );
}