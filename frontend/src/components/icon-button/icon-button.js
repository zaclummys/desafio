import IconButtonStyle from './icon-button.module.css';

export default function IconButton ({ icon, ...props }) {
    return (
        <button className={IconButtonStyle.button} {...props}>
            <i className="material-icons">{icon}</i>
        </button>
    );
}