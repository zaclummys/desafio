import React from 'react';
import FormItemStyle from './form-item.module.css'

export default function FormItem ({ children }) {
    return (
        <div className={FormItemStyle.item}>
            {children}
        </div>
    );
}