import './Header.sass'
import profileImg from '../../assets/imgs/whitney.svg'
import menuIcon from '../../assets/icons/menu.svg'
import closeIcon from '../../assets/icons/x.svg'
import { Link } from 'react-router'

export default function Header(props) {
    let variant = props['variant'] || null;
    let modifier = "";
    let iconSrc = menuIcon;
    let href = "settings"
    let message = "Welcome back!";

    if (variant === "settings") {
        modifier = `header--${variant}`;
        iconSrc = closeIcon;
        href = "/"
        message = "+91 6787978287"
    }

    return (
        <header className={`header ${modifier}`}>
            <div className="avatar">
                <figure className="avatar__wrapper">
                    <img className="avatar__img" src={profileImg} alt="" />
                </figure>
                <hgroup className="avatar__text">
                    <h1 className="avatar__username">Whitney Leon</h1>
                    <p className="avatar__welcome-msg">{message}</p>
                </hgroup>
            </div>
            <Link className="header__settings-link" to={href} ><img className="header__settings-icon" src={iconSrc} alt="" /></Link>
        </header>
    )
}