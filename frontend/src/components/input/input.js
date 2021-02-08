import React from 'react';
import InputStyle from './input.module.css';

export default function Input (props) {
    return <input className={InputStyle.input} {...props} />;
}

export function Select (props) {
    return <select className={InputStyle.input} {...props} />;
}