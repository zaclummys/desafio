import React from 'react';

import ContainerStyle from './container.module.css';

export function Container ({ children }) {
    return (
        <div className={ContainerStyle.container}>
            { children}
        </div>
    );
}

export function Header ({ children }) {
    return (
        <header className={ContainerStyle.header}>
            { children}
        </header>
    );
}

export function Content ({ children }) {
    return (
        <div className={ContainerStyle.content}>
            { children}
        </div>
    );
}

export function Actions ({ children }) {
    return (
        <div className={ContainerStyle.actions}>
            { children}
        </div>
    )
}

export function Action ({ children }) {
    return (
        <div className={ContainerStyle.action}>
            { children}
        </div>
    )
}