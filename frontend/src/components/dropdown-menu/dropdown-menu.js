import React from 'react';
import IconButton from '../icon-button/icon-button';
import DropdownMenuStyle from './dropdown-menu.module.css'

function Menu ({ children }) {
    return (
        <div className={DropdownMenuStyle.menu}>
            { children}
        </div>
    );
}

export function MenuItem ({ ...props }) {
    return (
        <div className={DropdownMenuStyle.item} {...props} />
    );
}

export default class DropdownMenu extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleWindowClick = () => {
            this.close()
        };

        this.state = {
            opened: false
        };
    }

    componentDidUpdate () {
        if (this.state.opened) {
            window.addEventListener('click', this.handleWindowClick);
        }
        else {
            window.removeEventListener('click', this.handleWindowClick);
        }
    }

    componentWillUnmount () {
        window.removeEventListener('click', this.handleWindowClick);
    }

    onClickButton (event) {
        event.stopPropagation();

        this.open();
    }

    onMenuClick (event) {
        event.stopPropagation();

        this.close();
    }

    open () {
        this.setState({
            opened: true
        });
    }

    close () {
        this.setState({
            opened: false
        });
    }

    render () {
        return (
            <div className={DropdownMenuStyle.container} onClick={event => this.onMenuClick(event)}>
                <IconButton icon="more_vert" onClick={event => this.onClickButton(event)} />

                { this.state.opened && (
                    <Menu>
                        { this.props.children}
                    </Menu>
                )}
            </div>
        )
    }
}