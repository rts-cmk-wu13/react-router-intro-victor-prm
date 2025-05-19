import './Header.sass'
import profileImg from '../assets/imgs/whitney.svg'

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
        </header>
    )
}