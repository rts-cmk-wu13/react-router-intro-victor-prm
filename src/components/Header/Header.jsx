import './Header.sass'
import profileImg from '../../assets/imgs/whitney.svg'
import menuIcon from '../../assets/icons/menu.svg'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header className="header">
            <div className="avatar">
                <figure className="avatar__wrapper">
                    <img className="avatar__img" src={profileImg} alt="" />
                </figure>
                <hgroup className="avatar__text">
                    <h1 className="avatar__username">Whitney Leon</h1>
                    <p className="avatar__welcome-msg">Welcome back!</p>
                </hgroup>
            </div>
            <Link className="header__settings-link" to="settings"><img className="header__settings-icon" src={menuIcon} alt="" /></Link>
        </header>
    )
}