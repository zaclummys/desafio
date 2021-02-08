import React from 'react';
import ButtonStyle from './button.module.css';

export default function Button (props) {
    return <button className={ButtonStyle.button} {...props} />;
}