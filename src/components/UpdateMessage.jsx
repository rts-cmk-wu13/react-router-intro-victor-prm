import './UpdateMessage.sass'
import closeIcon from '../assets/icons/x.svg'
import scooter from '../assets/imgs/scooter.svg'
import messageContainer from '../assets/imgs/message-container.svg'

export default function UpdateMessage() {
    return (
        <div className='update-message'>
            <img className='update-message__background' src={messageContainer} alt="" />
            <img className='update-message__illustration' src={scooter} alt="" />
            <div className='update-message__content'>
                <h2 className='update-message__heading'>We updated your scooter</h2>
                <p className='update-message__text'>Everything your scooter needed, we did it for you.</p>
            </div>
            <button className='update-message__close-button' aria-label='Close message'><img className='update-message__close-icon' src={closeIcon} alt="" /></button>

        </div >
    )
}